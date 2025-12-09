import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import SocialLinkList from './SocialList';
import ScrollArrow from './ScrollArrow';
import InfoWrap from './InfoWrap';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '../../utils/constant/constant';
import TextWrap from './TextWrap';
import MainBackground from '../atoms/background/MainBackground';

function MainContent() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  // 모바일 뷰포트 높이 처리 (모든 기기에서 동작)
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  // 애니메이션이 이루어 지는 동안에는 스크롤 금지, 메인 화면에서만 동작 되도록
  useEffect(() => {
    const mainSection = mainRef.current?.getBoundingClientRect();
    if (mainSection?.top === 0) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (pathname === '/') {
          document.body.style.overflow = '';
        }
      }, 3000);
    }
  }, [pathname]);

  return (
    <section
      ref={mainRef}
      className="relative h-screen min-h-[calc(var(--vh,1vh)*100)] flex flex-col items-center justify-between bg-transparent px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 sticky top-0 overflow-hidden z-10 transition-colors"
    >
      <MainBackground
        initial={{ ...OPACITY_0, scale: 1.25 }}
        animate={{ ...OPACITY_1, scale: 1 }}
        transition={{ ...ANI_TRANSITION, delay: 3 }}
      />

      <ScrollArrow delay={3.9} />

      <SocialLinkList delay={3} width="w-full" />

      <TextWrap />

      <InfoWrap delay={3} />
    </section>
  );
}

export default MainContent;
