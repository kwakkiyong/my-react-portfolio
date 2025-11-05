import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';
import { useTheme } from '../../../contexts/ThemeContext';

const BubblesContainer = tw.div`
  absolute
  top-0
  left-0
  right-0
  bottom-0
  overflow-hidden
`;

const Bubble = tw(motion.div)`
  absolute
  rounded-full
  border-2
  border-blue-300
  dark:border-white
  border-opacity-40
  dark:border-opacity-30
`;

// 비눗방울 생성 함수
const generateBubbles = (count: number, screenHeight: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    startY: screenHeight + Math.random() * 100, // 화면 하단 밖에서 시작
    size: Math.random() * 60 + 20,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    horizontalMovement: Math.random() * 40 - 20, // 좌우 움직임
  }));
};

function BubblesBackground() {
  const { theme } = useTheme();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const bubbles = generateBubbles(15, screenHeight); // 비눗방울 개수
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 다크모드와 라이트모드에 따른 배경색 설정
  const getBackgroundGradient = () => {
    if (isDark) {
      return 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))';
    }
    return 'radial-gradient(circle at 30% 30%, rgba(147, 197, 253, 0.35), rgba(191, 219, 254, 0.2))';
  };

  return (
    <BubblesContainer>
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          style={{
            left: `${bubble.left}%`,
            top: `${bubble.startY}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: getBackgroundGradient(),
          }}
          animate={{
            y: -screenHeight - bubble.size - 100,
            x: bubble.horizontalMovement,
            opacity: isDark 
              ? [0, 0.4, 0.6, 0.4, 0] 
              : [0, 0.6, 0.8, 0.6, 0],
            scale: [0.7, 0.9, 1, 1.1, 1.2],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </BubblesContainer>
  );
}

export default BubblesBackground;
