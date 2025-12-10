import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

const StarsContainer = tw.div`
  absolute
  top-0
  left-0
  right-0
  bottom-0
  overflow-hidden
`;

const Star = tw(motion.div)`
  absolute
  rounded-full
  bg-white
`;

// 별 생성 함수
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 12 + 8, // 더 빠르게 (8-20초)
    delay: Math.random() * 5,
    twinkleDelay: Math.random() * 3, // 깜빡임 지연
  }));
};

function StarsBackground() {
  const stars = generateStars(50); // 별 개수

  return (
    <StarsContainer>
      {stars.map((star) => (
        <Star
          key={star.id}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px white`,
          }}
          animate={{
            opacity: [0.2, 1, 0.4, 1, 0.2],
            scale: [0.8, 1.3, 1, 1.2, 0.8],
            y: [0, -20, -10, -30, 0],
            x: [0, star.twinkleDelay * 5 - 7.5, 0, star.twinkleDelay * 5 - 7.5, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      ))}
    </StarsContainer>
  );
}

export default StarsBackground;
