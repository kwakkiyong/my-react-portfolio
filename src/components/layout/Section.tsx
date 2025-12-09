import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

/**
 * 공통 섹션 레이아웃 컴포넌트
 * 모든 페이지에서 일관된 레이아웃을 제공합니다.
 */
export default function Section({ id, children, className = '', fullHeight = true }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`
        relative
        w-full
        ${fullHeight ? 'min-h-screen' : 'min-h-[80vh]'}
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        md:px-10
        lg:px-15
        py-10
        md:py-20
        transition-colors
        ${className}
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.section>
  );
}
