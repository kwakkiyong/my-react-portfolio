import Section from '@components/layout/Section';

function Contact() {
  return (
    <Section id="Contact" className="bg-transparent">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {/* 감사 인사 */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
              <span className="relative z-10 text-gray-200 dark:text-white">Thank You</span>
              <span
                className="absolute top-0 left-0 text-blue-400 dark:text-blue-400"
                style={{ transform: 'translate(4px, 4px)', zIndex: 0 }}
              >
                Thank You
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              제 포트폴리오를 끝까지 봐주셔서 진심으로 감사드립니다.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              함께 성장하고 더 나은 서비스를 만들어가는 프론트엔드 개발자가 되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
