import logoForLight from '../assets/logo/laserworks-logo-dark.png' // dark-ink artwork → shown on LIGHT theme
import logoForDark from '../assets/logo/laserworks-logo.png' // white artwork → shown on DARK theme

/**
 * LaserWorks logo — single source of truth for Header and Footer.
 *
 * The brand artwork (LASER WORKS wordmark + tagline + spark) as transparent PNGs.
 * Two ink variants are swapped purely by theme via CSS: dark-ink for the light
 * theme, white for the dark theme. Size from the call site with `className`.
 */
export default function Logo({ className = 'h-9' }) {
  const alt = 'LaserWorks — Industrial Rust Removal'
  return (
    <>
      <img
        src={logoForLight}
        alt={alt}
        width="1000"
        height="253"
        className={`w-auto select-none dark:hidden ${className}`}
      />
      <img
        src={logoForDark}
        alt={alt}
        width="1000"
        height="253"
        className={`w-auto select-none hidden dark:block ${className}`}
      />
    </>
  )
}
