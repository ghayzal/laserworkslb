import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, setTheme, mobile = false }) {
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      onClick={() => setTheme(next)}
      className="flex items-center justify-center w-9 h-9 rounded-lg border border-black/10 dark:border-white/10
                 text-gray-600 dark:text-gray-300 hover:text-brand-500 hover:border-brand-500/30
                 bg-black/[0.02] dark:bg-white/[0.03] transition-colors duration-200"
      aria-label={`Switch to ${next} mode${mobile ? ' (mobile)' : ''}`}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
