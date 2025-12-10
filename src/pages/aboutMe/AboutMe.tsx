import Section from '@components/layout/Section';
import ProfileInfo from '@components/main/ProfileInfo';
import { Card, CardContent } from '@components/ui/card.tsx';

function AboutMe() {
  return (
    <Section id="AboutMe" className="bg-transparent">
      <div className=" w-full max-w-7xl mx-auto p-10 sm:px-6 md:px-10 ">
        <h1 className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 text-center sm:text-left">
          <span className="relative z-10 text-gray-300 dark:text-white">About Me</span>
          <span
            className="absolute top-0 left-0 text-blue-400 dark:text-blue-400"
            style={{ transform: 'translate(4px, 4px)', zIndex: 0 }}
          >
            About Me
          </span>
        </h1>
        <div className="p-12 rounded-3xl shadow-sm bg-white border">
          {/* 프론트엔드 개발자로서의 포부 */}
          <Card className="mb-5 bg-white border-none shadow-none">
            <CardContent className="p-5 sm:p-8">
              <div className="space-y-6">
                <div className="space-y-2 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-500 leading-relaxed">
                  <p className="text-center">
                    사용자 경험을 최우선으로 생각하며, 기술과 디자인을 아우르는{' '}
                    <span className="font-bold text-blue-600">프론트엔드 개발자</span>가 되고 싶습니다.
                  </p>
                  <p className="text-center">
                    단순히 화면을 만드는 것을 넘어, 사용자의{' '}
                    <span className="font-bold text-blue-600">감정과 데이터를 연결</span>하는 의미 있는 인터페이스를
                    설계하고 구현하겠습니다.
                  </p>
                  <p className="text-center">지속적인 학습과 성장을 통해 더 나은 개발자로 발전해 나가겠습니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <ProfileInfo />
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
