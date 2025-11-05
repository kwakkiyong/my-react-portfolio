import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

const IntroComponent = tw.main`
  relative
  flex
  items-center
  flex-col
  justify-center
  bg-transparent
  px-10
  pt-10
  z-1
  max-lg:h-auto
  max-lg:py-20
`;
function Career() {
  return (
    <motion.div className="top-0" id="main">
      <IntroComponent id="Career">
        <div className="h-screen w-full"></div>
      </IntroComponent>
    </motion.div>
  );
}

export default Career;
