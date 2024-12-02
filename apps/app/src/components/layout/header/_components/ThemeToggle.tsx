import { Moon, Sun } from 'lucide-react'

import { ThemeSwitch } from '@/components/ui/ThemeSwitch'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const [enabled, setEnabled] = useState(theme == 'light')

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    setEnabled(enabled)
  }

  return (
    <ThemeSwitch
      id="theme-switch"
      checked={theme === 'light'}
      onCheckedChange={handleThemeChange}
    >
      <div className="">
        <Sun
          size={18}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
          color="white"
        />
        <Moon
          size={18}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
          color="white"
        />
        <span className="sr-only">Toggle theme</span>
      </div>
    </ThemeSwitch>
  )
}
