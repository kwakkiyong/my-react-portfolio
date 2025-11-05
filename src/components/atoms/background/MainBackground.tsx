import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

export const MainBg = tw(motion.div)`
  absolute
  bg-cover
  bg-center
  bg-main
  bg-gray-200
  dark:bg-gray-900
  top-0
  bottom-0
  left-0
  right-0
  z-[-1]
  transition-colors
`;

type AnimationT = {
  opacity?: number;
  scale?: number;
}

type TransitionT = {
  delay?: number
  ease?: string;
  duration?: number;
}

function MainBackground({ initial, animate, transition }: { initial?: AnimationT, animate?: AnimationT, transition?: TransitionT }) {
  return (
    <>
      <MainBg initial={{ ...initial }}
        animate={{ ...animate }}
        transition={{ ...transition }}
      />
    </>
  );
}

export default MainBackground;
