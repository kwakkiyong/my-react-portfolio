import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1, UPDATE_DATA } from '../../utils/constant/constant';
import { DelayT } from '../../types/type';

export const InfoTxtWrap = tw(motion.div)`
  absolute
  left-4
  sm:left-6
  md:left-10
  bottom-4
  sm:bottom-6
  md:bottom-10
`;

export const InfoTxt = tw.span`
  block
  text-sm
  sm:text-base
  text-[#999]
  dark:text-gray-400
  transition-colors
  text-gray-600
  dark:text-gray-400
  drop-shadow-[0px_0px_1px_#000000]
  dark:drop-shadow-[0px_0px_1px_#ffffff]
`;

function InfoWrap({ delay }: DelayT) {
  return (
    <InfoTxtWrap initial={OPACITY_0} animate={OPACITY_1} transition={{ ...ANI_TRANSITION, delay: delay } as any}>
      <InfoTxt>update. {UPDATE_DATA}</InfoTxt>
    </InfoTxtWrap>
  );
}

export default InfoWrap;
