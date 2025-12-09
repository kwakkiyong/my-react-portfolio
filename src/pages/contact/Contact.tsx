import Section from '@components/layout/Section';
import { Card, CardContent } from '@components/ui/card.tsx';
import { socialLink } from '@utils/constant/constant.ts';

function Contact() {
  return (
    <Section id="Contact" className="bg-transparent">
      <div className="w-full max-w-5xl mx-auto">
        <div className="space-y-8 sm:space-y-12">
          {/* 감사 인사 */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">Thank You</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              제 포트폴리오를 끝까지 봐주셔서 진심으로 감사드립니다.
              <br />
              함께 성장하고 더 나은 서비스를 만들어가는 프론트엔드 개발자가 되겠습니다.
            </p>
          </div>

          {/* 프론트엔드 개발자로서의 포부 */}
          <Card className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700">
            <CardContent className="p-8 sm:p-12">
              <div className="space-y-6">
                <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-center">
                    사용자 경험을 최우선으로 생각하며, 기술과 디자인을 아우르는 프론트엔드 개발자가 되고 싶습니다.
                  </p>
                  <p className="text-center">
                    단순히 화면을 만드는 것을 넘어, 사용자의 감정과 데이터를 연결하는 의미 있는 인터페이스를 설계하고
                    구현하겠습니다.
                  </p>
                  <p className="text-center">지속적인 학습과 성장을 통해 더 나은 개발자로 발전해 나가겠습니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 연락처 및 소셜 링크 */}
          <div className="text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialLink.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.target}
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-800 dark:text-gray-200 font-medium"
                >
                  {item.arialabel}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
