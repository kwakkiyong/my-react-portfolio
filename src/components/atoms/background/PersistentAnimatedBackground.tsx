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
  dark:bg-[rgb(30,35,45)]
  pointer-events-none
  transition-colors
`;

function PersistentAnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <BackgroundContainer>{theme === 'dark' ? <StarsBackground /> : <BubblesBackground />}</BackgroundContainer>;
}

export default PersistentAnimatedBackground;
