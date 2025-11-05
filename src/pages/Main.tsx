import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { isMobile } from '../utils/isMobile';
import SocialLinkList from '../components/main/SocialList';
import ScrollArrow from '../components/main/ScrollArrow';
import InfoWrap from '../components/main/InfoWrap';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '../utils/constant/constant';
import TextWrap from '../components/main/TextWrap';
import { MainComponent } from '../components/main/MainContent.styled';
import MainBackground from '../components/atoms/background/MainBackground';
import AnimatedBackground from '../components/atoms/background/AnimatedBackground';

function Main() {
  const { pathname } = useLocation(); // 현재 라우트 경로
  const vhRef = useRef(0); // 모바일 뷰포트 높이 계산용
  const mainRef = useRef<HTMLDivElement>(null); // 메인 섹션 Ref
  const ismobile = isMobile ? 'true' : 'false'; // 모바일 여부

  // 모바일 환경에서 높이 딱 맞춰 나오도록
  useEffect(() => {
    if (isMobile) {
      vhRef.current = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vhRef.current}px`);
    }
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
  }, []);

  return (
    <motion.div className="top-0" id="main">
      <MainComponent ref={mainRef} ismobile={ismobile}>
        {/* 배경 */}
        <MainBackground
          initial={{ ...OPACITY_0, scale: 1.25 }}
          animate={{ ...OPACITY_1, scale: 1 }}
          transition={{ ...ANI_TRANSITION, delay: 3 }}
        />

        {/* 애니메이션 배경 (별/비눗방울) */}
        <AnimatedBackground />

        {/* GitHub, Blog 등 소셜 링크 */}
        <SocialLinkList delay={3} />

        {/* 메인 타이틀, 서브텍스트 */}
        <TextWrap />

        {/* 하단 스크롤 화살표 */}
        <ScrollArrow delay={3.9} />

        {/* 좌측 하단 업데이트 날짜 */}
        <InfoWrap delay={3} />
      </MainComponent>
    </motion.div>
  );
}

export default Main;
