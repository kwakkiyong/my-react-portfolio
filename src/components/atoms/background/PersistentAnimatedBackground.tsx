import { useEffect, useState } from 'react';
import StarsBackground from './StarsBackground';
import BubblesBackground from './BubblesBackground';
import { useTheme } from '../../../contexts/ThemeContext';
import tw from 'tailwind-styled-components';

const BackgroundContainer = tw.div`
  fixed
  top-0
  left-0
  right-0
  bottom-0
  z-0
  bg-gray-50
  dark:bg-gray-950
  pointer-events-none
  transition-colors
`;

function PersistentAnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 모든 섹션에서 배경 표시 유지
      setShowBackground(true);
    };

    // 약간의 지연 후 실행 (DOM이 완전히 로드된 후)
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // 초기 호출

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <BackgroundContainer style={{ opacity: showBackground ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
      {theme === 'dark' ? <StarsBackground /> : <BubblesBackground />}
    </BackgroundContainer>
  );
}

export default PersistentAnimatedBackground;
