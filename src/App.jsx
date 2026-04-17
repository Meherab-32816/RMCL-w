import Footer from './components/organisms/Footer'
import HeroSection from './components/organisms/HeroSection'
import Navbar from './components/organisms/Navbar'
import SectionWrapper from './components/molecules/SectionWrapper'
import siteContent from './content/siteContent'

function App() {
  const { companyName, navbar, hero, services, approach, footer } = siteContent

  return (
    <div className="min-h-screen bg-surface text-body">
      <Navbar companyName={companyName} links={navbar.links} cta={navbar.cta} />

      <main>
        <HeroSection {...hero} />

        <SectionWrapper
          id="services"
          title={services.title}
          subtitle={services.subtitle}
          className="border-y border-primary/10"
          contentClassName="grid gap-4 md:grid-cols-3"
        >
          {services.items.map((item) => (
            <article key={item} className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-body">{item}</p>
            </article>
          ))}
        </SectionWrapper>

        <SectionWrapper
          id="approach"
          title={approach.title}
          subtitle={approach.subtitle}
          contentClassName="grid gap-6 md:grid-cols-3"
        >
          {approach.steps.map((step) => (
            <article key={step.title} className="rounded-lg border border-primary/10 bg-white p-6">
              <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body/80">{step.detail}</p>
            </article>
          ))}
        </SectionWrapper>
      </main>

      <div id="contact">
        <Footer
          companyName={companyName}
          description={footer.description}
          links={footer.links}
          contact={footer.contact}
        />
      </div>
    </div>
  )
}

export default App
