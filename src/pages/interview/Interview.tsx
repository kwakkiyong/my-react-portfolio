import Section from '@components/layout/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card.tsx';

function Interview() {
  return (
    <Section id="Interview" className="bg-transparent">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
        <h1 className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center sm:text-left">
          <span className="relative z-10 text-gray-200 dark:text-white">Interview</span>
          <span
            className="absolute top-0 left-0 text-blue-400 dark:text-blue-400"
            style={{ transform: 'translate(4px, 4px)', zIndex: 0 }}
          >
            Interview
          </span>
        </h1>
        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          <Card className="bg-transparent border-blue-400 border-2 rounded-2xl sm:rounded-[2rem]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Q. 프론트엔드로 전향한 이유?</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  빅데이터 솔루션 프로그램의 프론트엔드 및 데이터 파이프라인 개발을 담당하며 서비스 구조 전반을
                  이해했습니다. 이후 AI 에이전트 빌더 프로젝트에서 React와 TypeScript 기반의 UI를 개발하면서, 프론트엔드
                  기술이 사용자 경험에 직접적인 영향을 준다는 점에 매력을 느꼈습니다.{' '}
                  <span className="font-medium rounded-xl px-2 py-0.5 bg-gray-300 dark:bg-blue-600">
                    "결과가 눈에 보이는 개발"
                  </span>
                  이라는 가치를 통해 매일 성장하고 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-blue-400 border-2 rounded-2xl sm:rounded-[2rem]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">
                Q. 앞으로 어떤 프론트엔드 개발자로 성장하고 싶은지?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  디자인 시스템, 상태 관리, API 연동 등 프론트엔드의 모든 계층을 주도적으로 설계할 수 있는 개발자가 제
                  목표입니다. 그리고 궁극적으로는{' '}
                  <span className="font-medium rounded-xl px-2 py-0.5 bg-gray-300 dark:bg-blue-600">
                    "데이터와 감정을 연결하는 인터페이스를 만드는 개발자"
                  </span>
                  가 되고 싶습니다.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-blue-400 border-2 rounded-2xl sm:rounded-[2rem]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">
                Q. 이전의 경험들이 현재 프론트엔드 개발에 어떤 시너지를 주고 있나요?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  API 설계나 데이터 구조를 이해하는 능력이 있어, 프론트엔드에서 서버와의 통신 로직을 효율적으로 설계할
                  수 있습니다. 또한 시스템 전체의 데이터 흐름을 고려하며 화면을 구현하므로 단순한 UI 개발을 넘어{' '}
                  <span className="font-medium rounded-xl px-2 py-0.5 bg-gray-300 dark:bg-blue-600">
                    "서비스 전체를 보는 시야"
                  </span>{' '}
                  로 개발합니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default Interview;
