import { useEffect, useState, useRef } from 'react';
import tw from 'tailwind-styled-components';

const ScrollBarContainer = tw.div`
  fixed
  left-4
  top-1/2
  -translate-y-1/2
  z-50
  flex
  flex-col
  items-center
  gap-2
  hidden
  md:flex
`;

const ScrollBar = tw.div`
  w-1
  h-64
  bg-gray-300
  dark:bg-gray-700
  rounded-full
  relative
  overflow-hidden
  transition-colors
`;

const ScrollProgress = tw.div<{ $progress: number }>`
  absolute
  top-0
  left-0
  w-full
  bg-blue-500
  dark:bg-blue-400
  rounded-full
  transition-all
  duration-300
  ease-out
`;

const SectionDot = tw.button<{ $active: boolean }>`
  w-3
  h-3
  rounded-full
  border-2
  transition-all
  duration-300
  ${(props) =>
    props.$active
      ? 'bg-blue-500 dark:bg-blue-400 border-blue-500 dark:border-blue-400 scale-125'
      : 'bg-gray-400 dark:bg-gray-600 border-gray-400 dark:border-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'}
`;

const SectionLabel = tw.span<{ $active: boolean }>`
  absolute
  left-6
  top-1/2
  -translate-y-1/2
  text-xs
  font-bold
  whitespace-nowrap
  transition-all
  duration-300
  ${(props) =>
    props.$active
      ? 'text-blue-500 dark:text-blue-400 opacity-100 scale-110'
      : 'text-gray-400 dark:text-gray-600 opacity-0 scale-90'}
`;

const sections = [
  { id: 'main', label: 'Main', elementId: null },
  { id: 'AboutMe', label: 'About Me', elementId: 'AboutMe' },
  { id: 'Interview', label: 'Interview', elementId: 'Interview' },
  { id: 'Skills', label: 'Skills', elementId: 'Skills' },
  { id: 'Career', label: 'Career', elementId: 'Career' },
  { id: 'Project', label: 'Project', elementId: 'Project' },
  { id: 'Contact', label: 'Contact', elementId: 'Contact' },
];

function CustomScrollBar() {
  const [activeSection, setActiveSection] = useState('main');
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const viewportHeight = window.innerHeight;
      const scrollOffset = scrollTop + viewportHeight * 0.5; // 화면 중앙 기준

      // 메인 섹션 확인
      if (scrollTop < viewportHeight * 0.3) {
        setActiveSection('main');
        return;
      }

      // 모든 섹션 요소 찾기
      const sectionElements = sections
        .map((section) => {
          if (section.id === 'main') {
            return { id: section.id, element: document.body.firstElementChild as HTMLElement };
          }
          if (section.elementId) {
            return { id: section.id, element: document.getElementById(section.elementId!) };
          }
          return null;
        })
        .filter((item) => item && item.element !== null) as Array<{ id: string; element: HTMLElement }>;

      // 역순으로 확인하여 가장 가까운 섹션 찾기
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollTop;

          // 섹션의 상단이 화면 중앙보다 위에 있으면 활성화
          if (elementTop <= scrollOffset) {
            setActiveSection(id);
            return;
          }
        }
      }

      // 아무 섹션도 없으면 메인으로
      setActiveSection('main');
    };

    // Intersection Observer로 섹션 감지 (더 정확한 감지)
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => {
          const sectionId = entry.target.id;
          return sections.find((s) => s.elementId === sectionId || (s.id === 'main' && !sectionId));
        })
        .filter(Boolean) as typeof sections;

      if (visibleSections.length > 0) {
        // 가장 위에 있는 섹션 선택
        const topSection = visibleSections[0];
        if (topSection) {
          setActiveSection(topSection.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 각 섹션 요소 관찰
    sections.forEach((section) => {
      if (section.id === 'main') {
        const mainElement = document.getElementById('main') || document.body.firstElementChild;
        if (mainElement) {
          observer.observe(mainElement as Element);
        }
      } else if (section.elementId) {
        const element = document.getElementById(section.elementId);
        if (element) {
          observer.observe(element);
        }
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기 호출

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      if (section.elementId) {
        const element = document.getElementById(section.elementId);
        if (element) {
          const headerOffset = 80; // 헤더 높이
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth',
          });
        }
      } else if (sectionId === 'main') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <ScrollBarContainer ref={containerRef}>
      <ScrollBar>
        <ScrollProgress $progress={scrollProgress} style={{ height: `${scrollProgress}%` }} />
      </ScrollBar>

      <div className="flex flex-col gap-3 items-center relative">
        {sections.map((section) => (
          <div key={section.id} className="relative">
            <SectionDot
              $active={activeSection === section.id}
              onClick={() => scrollToSection(section.id)}
              aria-label={`Go to ${section.label}`}
            />
            <SectionLabel $active={activeSection === section.id}>{section.label}</SectionLabel>
          </div>
        ))}
      </div>
    </ScrollBarContainer>
  );
}

export default CustomScrollBar;
