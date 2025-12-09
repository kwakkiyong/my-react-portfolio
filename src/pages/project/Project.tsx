import Section from '@components/layout/Section';
import { Card } from '@components/ui/card.tsx';
import reactIcon from '@assets/icons/React.svg';
import typeScriptIcon from '@assets/icons/TypeScript.svg';
import tailwindCssIcon from '@assets/icons/TailwindCSS.svg';

function Project() {
  return (
    <Section id="Project" className="bg-transparent">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center sm:text-left">
          Project
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="h-full flex flex-col overflow-hidden p-0">
            <div className="relative h-1/2 min-h-[200px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <img src="src/assets/images/LuneDiary.png" alt="LuneDiary" className="w-full h-full object-cover" />
            </div>
            <div className="h-1/2 flex flex-col justify-between p-6 bg-gray-50 dark:bg-gray-800">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">LuneDiary - 감정일기</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  하루의 감정을 일기로 기록하면 AI가 감정을 분석, 요약, 감정에 맞는 음악을 추천해주는 다이어리입니다.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <img className="w-8" src={reactIcon} alt="React" />
                <img className="w-8" src={typeScriptIcon} alt="TypeScript" />
                <img className="w-8" src={tailwindCssIcon} alt="TailWindCSS" />
              </div>
            </div>
          </Card>
          <Card className="h-full flex flex-col overflow-hidden p-0">
            {/* 상단 반: 이미지 영역 */}
            <div className="relative h-1/2 min-h-[200px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <img
                src="src/assets/images/HanaAgentChat.png"
                alt="HanaAgentChat"
                className="w-full h-full object-cover"
              />
            </div>
            {/* 하단 반: 텍스트 영역 */}
            <div className="h-1/2 flex flex-col justify-between p-6 bg-gray-50 dark:bg-gray-800">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Hana Agent Chat</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  OpenAI API를 활용하여 다양한 AI 에이전트와 실시간 대화를 제공하는 간소화된 채팅 애플리케이션입니다.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <img className="w-8" src={reactIcon} alt="React" />
                <img className="w-8" src={typeScriptIcon} alt="TypeScript" />
                <img className="w-8" src={tailwindCssIcon} alt="TailWindCSS" />
              </div>
            </div>
          </Card>
          <Card className="h-full flex flex-col overflow-hidden p-0">
            {/* 상단 반: 이미지 영역 */}
            <div className="relative h-1/2 min-h-[200px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">사진</p>
              {/* 이미지가 있다면 아래 주석을 해제하고 사용하세요 */}
              {/* <img 
                src="이미지경로" 
                alt="프로젝트 이미지" 
                className="w-full h-full object-cover"
              /> */}
            </div>
            {/* 하단 반: 텍스트 영역 */}
            <div className="h-1/2 flex flex-col justify-between p-6 bg-gray-50 dark:bg-gray-800">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">포트폴리오 사이트</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">저를 소개하는 포트폴리오 사이트 입니다.</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <img className="w-8" src={reactIcon} alt="React" />
                <img className="w-8" src={typeScriptIcon} alt="TypeScript" />
                <img className="w-8" src={tailwindCssIcon} alt="TailWindCSS" />
              </div>
            </div>
          </Card>
          <Card className="h-full flex flex-col overflow-hidden p-0">
            {/* 상단 반: 이미지 영역 */}
            <div className="relative h-1/2 min-h-[200px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">사진</p>
              {/* 이미지가 있다면 아래 주석을 해제하고 사용하세요 */}
              {/* <img
                src="이미지경로"
                alt="프로젝트 이미지"
                className="w-full h-full object-cover"
              /> */}
            </div>
            {/* 하단 반: 텍스트 영역 */}
            <div className="h-1/2 flex flex-col justify-between p-6 bg-gray-50 dark:bg-gray-800">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Visual ETL Builder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Airflow, AWS Glue 와 유사한 비주얼 파이프라인 빌더를 구현한 프로젝트입니다.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <img className="w-8" src={reactIcon} alt="React" />
                <img className="w-8" src={typeScriptIcon} alt="TypeScript" />
                <img className="w-8" src={tailwindCssIcon} alt="TailWindCSS" />
              </div>
            </div>
          </Card>
          <Card className="h-full flex flex-col overflow-hidden p-0">
            {/* 상단 반: 이미지 영역 */}
            <div className="relative h-1/2 min-h-[200px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">사진</p>
              {/* 이미지가 있다면 아래 주석을 해제하고 사용하세요 */}
              {/* <img
                src="이미지경로"
                alt="프로젝트 이미지"
                className="w-full h-full object-cover"
              /> */}
            </div>
            {/* 하단 반: 텍스트 영역 */}
            <div className="h-1/2 flex flex-col justify-between p-6 bg-gray-50 dark:bg-gray-800">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">개인 블로그 사이트</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">React로 구현한 개인 블로그입니다.</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <img className="w-8" src={reactIcon} alt="React" />
                <img className="w-8" src={typeScriptIcon} alt="TypeScript" />
                <img className="w-8" src={tailwindCssIcon} alt="TailWindCSS" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default Project;
