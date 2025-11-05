import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '../../utils/constant/constant';

export const TxtBox = tw.section`
  absolute
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  flex
  items-center
  flex-col
  justify-center
  w-full
`;

export const MainTitle = tw(motion.h1)`
  text-6xl
  md:text-8xl
  font-black
  text-black
  dark:text-white
  mb-4
  transition-colors
  font-comic-neue
  tracking-tight

  max-sm:text-4xl
  max-lg:text-6xl
`;

export const SubTitle = tw(motion.h2)`
  text-4xl
  md:text-6xl
  font-bold
  text-black
  dark:text-gray-200
  transition-colors
  font-comic-neue
  tracking-tight

  max-sm:text-2xl
  max-lg:text-3xl
`;

function TextWrap() {
  return (
    <TxtBox>
      <MainTitle
        initial={{ ...OPACITY_0, y: 20 }}
        animate={{ ...OPACITY_1, y: 0 }}
        transition={{ ...ANI_TRANSITION, delay: 2 } as any}
      >
        Kwak Ki Yong
      </MainTitle>

      <SubTitle
        initial={{ ...OPACITY_0, y: 20 }}
        animate={{ ...OPACITY_1, y: 0 }}
        transition={{ ...ANI_TRANSITION, delay: 2.5 } as any}
      >
        포트폴리오
      </SubTitle>
    </TxtBox>
  );
}

export default TextWrap;
