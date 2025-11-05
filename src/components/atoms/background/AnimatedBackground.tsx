import { useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import StarsBackground from './StarsBackground';
import BubblesBackground from './BubblesBackground';

function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR 방지 및 초기 렌더링 대기
  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === 'dark' ? <StarsBackground /> : <BubblesBackground />}
    </>
  );
}

export default AnimatedBackground;
