export function trackCtaInteraction({ placement, label, href }) {
  console.info('[rmcl.interaction.cta]', {
    placement,
    label,
    href,
    timestamp: new Date().toISOString(),
  })
}
