import { useEffect, useMemo, useRef, useState } from 'react'
import Button from './components/atoms/Button'
import Footer from './components/organisms/Footer'
import HeroSection from './components/organisms/HeroSection'
import Navbar from './components/organisms/Navbar'
import SectionWrapper from './components/molecules/SectionWrapper'
import siteContent from './content/siteContent.json'
import { trackCtaInteraction } from './utils/interactionTracking'

function App() {
  const { companyName, navbar, hero, services, methodology, caseStudies, cta, footer } = siteContent
  const sectionIds = useMemo(() => navbar.links.map((link) => link.href.replace('#', '')), [navbar.links])
  const [activeHref, setActiveHref] = useState(navbar.links[0]?.href ?? '')
  const visibleSectionsRef = useRef(new Map())

  const createTrackedCtaHandler = (placement, action) => () => {
    if (!action) {
      return
    }

    trackCtaInteraction({
      href: action.href,
      label: action.label,
      placement,
    })
  }

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) {
      return
    }

    const visibleSections = visibleSectionsRef.current
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section) => section !== null)

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, {
              ratio: entry.intersectionRatio,
              top: Math.abs(entry.boundingClientRect.top),
            })
            return
          }

          visibleSections.delete(entry.target.id)
        })

        if (visibleSections.size === 0) {
          return
        }

        const [nextActiveSectionId] = [...visibleSections.entries()].sort(
          ([, currentValue], [, nextValue]) =>
            nextValue.ratio - currentValue.ratio || currentValue.top - nextValue.top,
        )[0]

        const nextActiveHref = `#${nextActiveSectionId}`
        setActiveHref((currentValue) => (currentValue === nextActiveHref ? currentValue : nextActiveHref))
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-30% 0px -55% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      visibleSections.clear()
    }
  }, [sectionIds])

  return (
    <div className="min-h-screen bg-surface text-body">
      <Navbar
        companyName={companyName}
        links={navbar.links}
        cta={navbar.cta}
        activeHref={activeHref}
        onNavLinkClick={setActiveHref}
        onCtaClick={createTrackedCtaHandler('navbar', navbar.cta)}
      />

      <main>
        <HeroSection
          {...hero}
          onPrimaryCtaClick={createTrackedCtaHandler('hero', hero.primaryCta)}
          onSecondaryCtaClick={createTrackedCtaHandler('hero', hero.secondaryCta)}
        />

        <SectionWrapper
          id={services.id}
          context={services.context}
          title={services.title}
          subtitle={services.subtitle}
          className="border-y border-primary/10"
          contentClassName="grid gap-4 md:grid-cols-3"
        >
          {services.items.map((item) => (
            <article key={item.title} className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body/80">{item.detail}</p>
            </article>
          ))}
        </SectionWrapper>

        <SectionWrapper
          id={methodology.id}
          context={methodology.context}
          title={methodology.title}
          subtitle={methodology.subtitle}
          contentClassName="grid gap-6 md:grid-cols-3"
        >
          {methodology.steps.map((step) => (
            <article key={step.title} className="rounded-lg border border-primary/10 bg-white p-6">
              <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body/80">{step.detail}</p>
            </article>
          ))}
        </SectionWrapper>

        <SectionWrapper
          id={caseStudies.id}
          context={caseStudies.context}
          title={caseStudies.title}
          subtitle={caseStudies.subtitle}
          className="border-y border-primary/10"
          contentClassName="grid gap-6 md:grid-cols-2"
        >
          {caseStudies.items.map((study) => (
            <article key={study.name} className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary">{study.name}</h3>
              <dl className="mt-4 space-y-3 text-sm leading-relaxed text-body/80">
                <div>
                  <dt className="font-semibold text-primary">{caseStudies.labels.challenge}</dt>
                  <dd>{study.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">{caseStudies.labels.intervention}</dt>
                  <dd>{study.intervention}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">{caseStudies.labels.impact}</dt>
                  <dd>{study.impact}</dd>
                </div>
              </dl>
            </article>
          ))}
        </SectionWrapper>

        <SectionWrapper
          id={cta.id}
          context={cta.context}
          title={cta.title}
          subtitle={cta.subtitle}
          contentClassName="flex flex-wrap gap-4"
        >
          <Button href={cta.primaryCta.href} onClick={createTrackedCtaHandler('contact-section', cta.primaryCta)}>
            {cta.primaryCta.label}
          </Button>
          <Button
            href={cta.secondaryCta.href}
            variant="secondary"
            onClick={createTrackedCtaHandler('contact-section', cta.secondaryCta)}
          >
            {cta.secondaryCta.label}
          </Button>
        </SectionWrapper>
      </main>

      <Footer
        companyName={companyName}
        description={footer.description}
        links={footer.links}
        contact={footer.contact}
      />
    </div>
  )
}

export default App
