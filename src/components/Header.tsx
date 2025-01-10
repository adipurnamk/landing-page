import { useState } from 'react'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            Your Name
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <a href="#about" className="block py-2 text-gray-600 dark:text-gray-300">About</a>
            <a href="#skills" className="block py-2 text-gray-600 dark:text-gray-300">Skills</a>
            <a href="#contact" className="block py-2 text-gray-600 dark:text-gray-300">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full text-left py-2 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 