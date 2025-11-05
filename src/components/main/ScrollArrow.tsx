import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1, Y_0, Y_M20 } from '../../utils/constant/constant';
import { DelayT } from '../../types/type';

export const ScrollArrowBox = tw(motion.div)`
  absolute
  bottom-[3rem]
  left-[50%]
  translate-x-[-50%]
  z-[20]
  flex
  flex-col
  items-center
  rotate-180

  animate-bounce
`;

const ARROW_STYLES = { width: '25', height: '18' }

function ScrollArrow({ delay }: DelayT) {
  return (
    <ScrollArrowBox
      initial={{ ...OPACITY_0, ...Y_M20 }}
      animate={{ ...OPACITY_1, ...Y_0 }}
      transition={{ ...ANI_TRANSITION, delay: delay } as any}
      className="text-white dark:text-gray-200"
    >
      <svg
        width={ARROW_STYLES.width}
        height={ARROW_STYLES.height}
        viewBox="0 0 28 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current"
      >
        <path
          d="M26 2L14 14L2 2"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        width={ARROW_STYLES.width}
        height={ARROW_STYLES.height}
        viewBox="0 0 28 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current"
      >
        <path
          d="M26 2L14 14L2 2"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ScrollArrowBox>
  )
}

export default ScrollArrow;
