import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

type IsMobile = {
  ismobile: string;
};

/* 메인 컴포넌트 */
export const MainComponent = tw.main<IsMobile>`
  relative
  h-screen
  flex
  items-center
  flex-col
  justify-between
  bg-transparent
  px-10
  pt-24
  sticky
  top-0
  overflow-hidden
  transition-colors
  z-10

  ${(props) => (props.ismobile === 'true' ? 'max-sm:h-[calc(var(--vh,1vh)*100)]' : 'max-sm:h-screen')}
  max-sm:pt-20
  max-sm:px-5
`;

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

export const Img = tw(motion.img)<IsMobile>`
  absolute
  bottom-0
  w-auto
  h-[calc(100vh-40vh)]
  transition-all

  ${(props) => (props.ismobile === 'true' ? 'max-sm:h-[calc(100vh-50vh)]' : 'max-sm:h-[calc(100vh-40vh)]')}
`;
