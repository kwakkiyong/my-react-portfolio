import Section from '@components/layout/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card.tsx';
import javaScriptIcon from '@assets/icons/JavaScript.svg';
import cssIcon from '@assets/icons/CSS.svg';
import senchaIcon from '@assets/icons/Sencha.svg';
import javaIcon from '@assets/icons/Java.svg';
import mysqlIcon from '@assets/icons/MySQL.svg';
import reactIcon from '@assets/icons/React.svg';
import typeScriptIcon from '@assets/icons/TypeScript.svg';
import tailwindCssIcon from '@assets/icons/TailwindCSS.svg';

function Career() {
  return (
    <Section id="Career" className="bg-transparent">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center sm:text-left">
          Career
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">(주)레드우드케이</CardTitle>
              <CardDescription>2022.12 ~ 2023.12 </CardDescription>
              <CardDescription>데이터솔루션팀 - 솔루션 개발</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="text-sm sm:text-base md:text-base leading-relaxed space-y-2">
                <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-500 dark:before:bg-gray-400 before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                  ETL 솔루션 프론트&백엔드 개발 (ExtJS, JavaScript, Java)
                </li>
                <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-500 dark:before:bg-gray-400 before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                  highChart, Prometheus 를 사용한 대시보드 신규 구축
                </li>
                <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-500 dark:before:bg-gray-400 before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                  농협, 디지털플랫폼정부 등 다양한 타사 기업 유지보수 수행
                </li>
                <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-500 dark:before:bg-gray-400 before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                  클라이언트와의 직접적인 소통 및 응대를 통해 UI/UX 구체화
                </li>
                <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-500 dark:before:bg-gray-400 before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                  다양한 프로젝트에서 고객사와의 원활한 커뮤니케이션과 협업을 통해 안정적인 서비스 제공
                </li>
              </ul>
              <div className="flex mt-5 gap-2">
                <img className="w-8" src={javaScriptIcon} alt="JavaScript" />
                <img className="w-6" src={senchaIcon} alt="Sencha" />
                <img className="w-8" src={cssIcon} alt="CSS" />
                <img className="w-8" src={javaIcon} alt="Java" />
                <img className="w-8" src={mysqlIcon} alt="MySQL" />
              </div>
            </CardContent>
          </Card>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">(주)디딤365</CardTitle>
              <CardDescription>2023.12 ~ 2025.11 </CardDescription>
              <CardDescription>AI/빅데이터그룹 - 솔루션 개발</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="text-sm sm:text-base md:text-base leading-relaxed space-y-2">
                <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-500 dark:before:bg-gray-400 before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                  생성형 AI 플랫폼 프론트&백엔드 개발 및 설계 (React, TypeScript)
                </li>
                <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-500 dark:before:bg-gray-400 before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                  신규 ETL 솔루션 프론트&백엔드 개발 및 설계
                </li>
                <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-500 dark:before:bg-gray-400 before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                  프론트엔드와 백엔드 구조를 직접 설계하여, 데이터 처리, 시각화 구현
                </li>
                <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-500 dark:before:bg-gray-400 before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                  전역상태 관리 구현 및 TailWindCSS 를 통한 반응형 UI/UX 구현
                </li>
                <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-500 dark:before:bg-gray-400 before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                  기술 복잡도가 높은 기능(실시간 채팅, OAuth 인증, 데이터 통계)을 React 기반으로 안정적으로 구현
                </li>
              </ul>
              <div className="flex mt-5 gap-2">
                <img className="w-8" src={reactIcon} alt="React" />
                <img className="w-8" src={typeScriptIcon} alt="TypeScript" />
                <img className="w-8" src={tailwindCssIcon} alt="TailWindCSS" />
                <img className="w-8" src={javaScriptIcon} alt="JavaScript" />
                <img className="w-8" src={javaIcon} alt="Java" />
                <img className="w-8" src={mysqlIcon} alt="MySQL" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default Career;
