import { useTheme } from '@contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

/* Header 컴포넌트 */
const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="text-xl font-bold text-gray-800 dark:text-white">KKY's Portfolio</div>

          {/* 메뉴 및 다크모드 토글 */}
          <div className="flex items-center space-x-4">
            {/* 메뉴 */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#Skills"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#Projects"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* 다크모드 토글 버튼 */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="테마 전환"
            >
              {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-yellow-500" /> // 해 모양 아이콘
              ) : (
                <Moon className="w-6 h-6 text-gray-700" /> // 달 모양 아이콘
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
