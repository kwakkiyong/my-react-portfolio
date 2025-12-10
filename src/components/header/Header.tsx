import { useState } from 'react';
import { useTheme } from '@contexts/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import AnimatedBackground from '@components/atoms/background/AnimatedBackground';

/* Header 컴포넌트 */
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#AboutMe', label: 'About Me' },
    { href: '#Interview', label: 'Interview' },
    { href: '#Skills', label: 'Skills' },
    { href: '#Career', label: 'Career' },
    { href: '#Project', label: 'Project' },
    { href: '#Contact', label: 'Contact' },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors overflow-hidden">
      {/* 애니메이션 배경 */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 backdrop-blur-md container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">KKY's Portfolio</div>

          {/* 데스크톱 메뉴 및 다크모드 토글 */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <nav className="flex items-center space-x-4 lg:space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm lg:text-lg"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* 다크모드 토글 버튼 */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="테마 전환"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="테마 전환"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="메뉴 토글"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleMenuClick}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
