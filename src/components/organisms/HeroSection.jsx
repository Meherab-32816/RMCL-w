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
    <SectionWrapper id="top" className="pt-20 md:pt-28" contentClassName="max-w-4xl">
      <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary md:text-[3.6rem]">
        {title}
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body/75">{description}</p>
      <div className="mt-11 flex flex-wrap gap-4">
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
