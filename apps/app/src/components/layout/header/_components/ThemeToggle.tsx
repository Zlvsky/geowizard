import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

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
    <Button variant="icon" onClick={handleThemeChange}>
      <Sun
        size={24}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={24}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
