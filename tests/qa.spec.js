import { test, expect } from '@playwright/test'

const WHATSAPP =
  'https://wa.me/96170046602?text=Hello%20LaserWorks%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20laser%20cleaning%20service.'
const INSTAGRAM = 'https://www.instagram.com/laserworkslb/'
const NAV = ['Home', 'About', 'Applications', 'Gallery', 'Process', 'Contact']

test('loads with correct SEO title and hero heading', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('LaserWorks Lebanon | Advanced Laser Cleaning & Restoration')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Laser Cleaning')
})

test('all primary navigation items are present', async ({ page }) => {
  await page.goto('/')
  for (const label of NAV) {
    await expect(
      page.locator('header nav button', { hasText: new RegExp(`^${label}$`) })
    ).toBeVisible()
  }
})

test('every WhatsApp CTA uses the exact quote URL', async ({ page }) => {
  await page.goto('/')
  const links = page.locator('a[href*="wa.me"]')
  const count = await links.count()
  expect(count).toBeGreaterThanOrEqual(4)
  for (let i = 0; i < count; i++) {
    expect(await links.nth(i).getAttribute('href')).toBe(WHATSAPP)
  }
})

test('contact links (instagram, email, phone, maps) are correct', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator(`a[href="${INSTAGRAM}"]`).first()).toBeVisible()
  await expect(page.locator('a[href="mailto:aounjunior@gmail.com"]').first()).toBeVisible()
  await expect(page.locator('a[href="tel:+96170046602"]').first()).toBeVisible()
  await expect(page.locator('a[href*="google.com/maps"]').first()).toBeVisible()
})

test('logo links to #home', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('header a').first()).toHaveAttribute('href', '#home')
})

test('language toggle switches EN <-> AR (dir + lang)', async ({ page }) => {
  await page.goto('/')
  const html = page.locator('html')
  await expect(html).toHaveAttribute('dir', 'ltr')
  // Target the desktop toggle specifically (the mobile one is labelled "… (mobile)").
  await page.getByRole('button', { name: 'Switch to Arabic', exact: true }).click()
  await expect(html).toHaveAttribute('dir', 'rtl')
  await expect(html).toHaveAttribute('lang', 'ar')
  await page.getByRole('button', { name: 'Switch to English', exact: true }).click()
  await expect(html).toHaveAttribute('dir', 'ltr')
  await expect(html).toHaveAttribute('lang', 'en')
})

test('desktop nav click scrolls to the target section', async ({ page }) => {
  await page.goto('/')
  await page.locator('header nav button', { hasText: /^Contact$/ }).click()
  await expect(page.locator('#contact')).toBeInViewport({ ratio: 0.1 })
})

test('mobile menu opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const toggle = page.locator('button[aria-label="Toggle menu"], button[aria-label="Close menu"]').first()
  await toggle.click()
  await expect(page.locator('a[href*="wa.me"]:visible').first()).toBeVisible()
  await toggle.click()
  // overlay CTA should no longer be on screen near the top
  await expect(page.getByRole('button', { name: 'Home' })).toBeHidden()
})

test('no broken images and no horizontal overflow', async ({ page }) => {
  await page.goto('/')
  // Most images use loading="lazy", so they only fetch once near the viewport.
  // Bring each image into view to trigger its load, then wait for all to settle —
  // this lets us distinguish "not loaded yet" from a genuinely broken image.
  await page.evaluate(async () => {
    for (const img of document.images) {
      img.scrollIntoView({ block: 'center' })
      await new Promise((r) => setTimeout(r, 30))
    }
    await Promise.all(
      [...document.images].map((img) =>
        img.complete ? Promise.resolve() : img.decode().catch(() => {})
      )
    )
    window.scrollTo(0, 0)
  })
  // Any image still at naturalWidth === 0 failed to load.
  const brokenImages = await page.evaluate(
    () => [...document.images].filter((i) => i.naturalWidth === 0).length
  )
  expect(brokenImages).toBe(0)
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  )
  expect(overflow).toBe(false)
})

test('no console errors on load', async ({ page }) => {
  const errors = []
  page.on('console', (m) => {
    // ignore noise injected by local antivirus/browser extensions
    if (m.type() === 'error' && !/kaspersky|extension/i.test(m.text())) errors.push(m.text())
  })
  page.on('pageerror', (e) => errors.push(String(e)))
  await page.goto('/')
  await page.waitForTimeout(1200)
  expect(errors).toEqual([])
})
