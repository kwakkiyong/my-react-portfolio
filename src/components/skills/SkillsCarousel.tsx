import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SkillCategory from './SkillCategory';
import { SkillCategory as SkillCategoryType } from '@data/skills';

interface SkillsCarouselProps {
  categories: SkillCategoryType[];
}

export default function SkillsCarousel({ categories }: SkillsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 빈 카테고리 제외하고 필터링
  const visibleCategories = categories.filter((category) => category.skills.length > 0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : visibleCategories.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < visibleCategories.length - 1 ? prev + 1 : 0));
  };

  if (visibleCategories.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      {/* 카드 컨테이너 */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{
            x: isMobile ? `-${currentIndex * 100}%` : `calc(-${currentIndex * 50}% - ${currentIndex * 0.75}rem)`,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 40,
          }}
        >
          {visibleCategories.map((category) => (
            <div
              key={category.title}
              className="flex-shrink-0"
              style={{
                width: isMobile ? '100%' : 'calc((100% - 1.5rem) / 2)',
                minWidth: isMobile ? '100%' : 'calc((100% - 1.5rem) / 2)',
                maxWidth: isMobile ? '100%' : 'calc((100% - 1.5rem) / 2)',
              }}
            >
              <SkillCategory category={category} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 화살표 버튼 */}
      {visibleCategories.length > 2 && (
        <>
          <button
            onClick={handlePrev}
            className="border absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="이전 카드"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={handleNext}
            className="border absolute -right-10 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="다음 카드"
            disabled={currentIndex >= visibleCategories.length - 2}
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </>
      )}

      {/* 인디케이터 */}
      {visibleCategories.length > 2 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(visibleCategories.length / 2) }).map((_, index) => {
            const pageIndex = index * 2;
            const isActive = currentIndex === pageIndex || (currentIndex === pageIndex - 1 && pageIndex > 0);
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(pageIndex)}
                className={`w-2 h-2 rounded-full transition-all ${
                  isActive
                    ? 'bg-blue-500 dark:bg-blue-400 w-6'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`페이지 ${index + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
