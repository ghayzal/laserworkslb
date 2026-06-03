export default function LanguageToggle({ lang, setLang, mobile = false }) {
  const target = lang === 'en' ? 'Arabic' : 'English'
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-500
                 transition-colors duration-200 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10
                 hover:border-brand-500/30 bg-black/[0.02] dark:bg-white/[0.03]"
      aria-label={`Switch to ${target}${mobile ? ' (mobile)' : ''}`}
    >
      <span className={lang === 'en' ? 'text-brand-500 font-semibold' : ''}>EN</span>
      <span className="text-black/30 dark:text-white/30">/</span>
      <span className={lang === 'ar' ? 'text-brand-500 font-semibold' : ''}>AR</span>
    </button>
  )
}
