import Button from '../atoms/Button'
import SectionWrapper from '../molecules/SectionWrapper'

function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}) {
  return (
    <SectionWrapper id="top" className="pt-20 md:pt-24" contentClassName="max-w-4xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body/80">{description}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href={primaryCta.href} onClick={onPrimaryCtaClick}>
          {primaryCta.label}
        </Button>
        <Button href={secondaryCta.href} variant="secondary" onClick={onSecondaryCtaClick}>
          {secondaryCta.label}
        </Button>
      </div>
    </SectionWrapper>
  )
}

export default HeroSection
