import { useEffect, useRef } from 'react';

import ScrollArrow from '@components/main/ScrollArrow.tsx';
import InfoWrap from '@components/main/InfoWrap.tsx';
import MainText from '@components/main/MainText.tsx';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '@utils/constant/constant.ts';
import MainBackground from '@components/atoms/background/MainBackground.tsx';
import TextWrap from '@components/main/TextWrap.tsx';
import SocialLink from '@components/main/SocialLink.tsx';

function Main() {
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

  return (
    <section
      ref={mainRef}
      id="main"
      className="relative h-screen min-h-[calc(var(--vh,1vh)*100)] flex flex-col items-center justify-between bg-transparent px-4 sm:px-6 md:px-10 pt-10 sm:pt-15 overflow-hidden z-10 transition-colors"
    >
      {/* 배경 */}
      <MainBackground
        initial={{ ...OPACITY_0, scale: 1.25 }}
        animate={{ ...OPACITY_1, scale: 1 }}
        transition={{ ...ANI_TRANSITION, delay: 0.5 }}
      />

      {/* 메인 컨텐츠 영역 */}
      <div className="flex-1 flex gap-5 flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10">
        {/* 소셜 링크 */}
        <SocialLink />

        {/* 메인 텍스트 */}
        <div className="space-y-2">
          <MainText />
          <TextWrap />
        </div>
      </div>

      {/* 하단 스크롤 화살표 */}
      <ScrollArrow delay={5} />

      {/* 좌측 하단 업데이트 날짜 */}
      <InfoWrap delay={1} />
    </section>
  );
}

export default Main;
