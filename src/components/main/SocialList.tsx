import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1, socialLink } from '../../utils/constant/constant';
import DataToolTip from '../toolTip/ToolTip';

type PropsT = {
  width?: string;
}

export const SocialList = tw(motion.div) <PropsT>`
  absolute
  top-24
  left-10
  right-10
  flex
  gap-5
  z-30
  justify-center
  w-auto
  
  max-sm:top-20
  max-sm:left-5
  max-sm:right-5
`;

export const SocialLink = tw.a`
  relative
  flex
  gap-1
  items-center
  flex-col
  z-20 
  font-medium
  py-1
  px-2
  text-gray-800
  dark:text-gray-200
  transition-all
  ease-in-out
  duration-[0.3s]
  hover:text-[#fff]
  dark:hover:text-white

  after:content-['']
  after:absolute
  after:bottom-[-2px]
  after:left-0
  after:z-[-1]
  after:w-full
  after:h-1
  after:bg-black
  dark:after:bg-white
  after:block
  after:transition-all
  after:ease-in-out
  after:duration-[0.3s]

  hover:after:h-full
`;

export const ScTxt = tw.span`
  sr-only
  focus:not-sr-only
`;

function SocialLinkList({ delay, width }: { delay?: number, width?: string }) {
  return (
    <SocialList
      width={width}
      initial={OPACITY_0}
      animate={OPACITY_1}
      transition={{ ...ANI_TRANSITION, delay: delay && delay } as any}
    >
      {socialLink.map((item) => (
        <DataToolTip key={item.id} dataTooltip={item.datatooltip} type={item.tooltiptype}>
          <SocialLink href={item.href} aria-label={item.arialabel} target={item.target}>
            {item.arialabel}
          </SocialLink>
        </DataToolTip>
      ))}
    </SocialList>
  )
}

export default SocialLinkList;
