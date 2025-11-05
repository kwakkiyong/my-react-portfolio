import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1, UPDATE_DATA } from '../../utils/constant/constant';
import { DelayT } from '../../types/type';

export const InfoTxtWrap = tw(motion.div)`
  absolute
  left-10
  bottom-10

  max-sm:left-5
  max-sm:bottom-5
`;

export const InfoTxt = tw.span`
  block
  text-base
  text-[#999]
  dark:text-gray-400
  transition-colors

  max-sm:text-sm
  max-sm:text-gray-600
  dark:max-sm:text-gray-400
  max-sm:drop-shadow-[0px_0px_1px_#000000]
  dark:max-sm:drop-shadow-[0px_0px_1px_#ffffff]
`;

function InfoWrap({ delay }: DelayT) {
  return (
    <InfoTxtWrap
      initial={OPACITY_0}
      animate={OPACITY_1}
      transition={{ ...ANI_TRANSITION, delay: delay }}
    >
      <InfoTxt>update. {UPDATE_DATA}</InfoTxt>
    </InfoTxtWrap>
  )
}

export default InfoWrap;
