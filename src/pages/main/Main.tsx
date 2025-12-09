import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import SocialLinkList from '@components/main/SocialList.tsx';
import ScrollArrow from '@components/main/ScrollArrow.tsx';
import InfoWrap from '@components/main/InfoWrap.tsx';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '@utils/constant/constant.ts';
import TextWrap from '@components/main/TextWrap.tsx';
import MainBackground from '@components/atoms/background/MainBackground.tsx';

function Main() {
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
      id="main"
      className="relative h-screen min-h-[calc(var(--vh,1vh)*100)] flex flex-col items-center justify-between bg-transparent px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 overflow-hidden z-10 transition-colors"
    >
      {/* 배경 */}
      <MainBackground
        initial={{ ...OPACITY_0, scale: 1.25 }}
        animate={{ ...OPACITY_1, scale: 1 }}
        transition={{ ...ANI_TRANSITION, delay: 3 }}
      />

      {/* GitHub, Blog 등 소셜 링크 */}
      <SocialLinkList delay={3} />

      {/* 메인 타이틀, 서브텍스트 */}
      <TextWrap />

      {/* 하단 스크롤 화살표 */}
      <ScrollArrow delay={3.9} />

      {/* 좌측 하단 업데이트 날짜 */}
      <InfoWrap delay={3} />
    </section>
  );
}

export default Main;
