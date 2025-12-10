import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '@utils/constant/constant.ts';
import reactIcon from '@assets/icons/React.svg';
import typeScriptIcon from '@assets/icons/TypeScript.svg';
import tailwindCssIcon from '@assets/icons/TailwindCSS.svg';
import javaScriptIcon from '@assets/icons/JavaScript.svg';

const mainTechStack = [
  { name: 'React', icon: reactIcon },
  { name: 'TypeScript', icon: typeScriptIcon },
  { name: 'TailwindCSS', icon: tailwindCssIcon },
  { name: 'JavaScript', icon: javaScriptIcon },
];

interface TechStackProps {
  delay?: number;
}

export default function TechStack({ delay = 3.5 }: TechStackProps) {
  return (
    <motion.div
      className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 z-20"
      initial={{ ...OPACITY_0, y: 20 }}
      animate={{ ...OPACITY_1, y: 0 }}
      transition={{ ...ANI_TRANSITION, delay } as any}
    >
      <div className="flex items-center gap-3 sm:gap-4 px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full shadow-lg">
        {mainTechStack.map((tech, index) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 hover:scale-110 transition-transform"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={tech.icon} alt={tech.name} className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
