import Section from '@components/layout/Section';
import { Card } from '@components/ui/card.tsx';
import reactIcon from '../../../public/assets/icons/React.svg';
import typeScriptIcon from '../../../public/assets/icons/TypeScript.svg';
import tailwindCssIcon from '../../../public/assets/icons/TailwindCSS.svg';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  techIcons: string[];
  deployUrl?: string;
  notionUrl?: string;
}

const projects: ProjectItem[] = [
  {
    id: 'lunediary',
    title: 'LuneDiary - 감정일기',
    description: '하루의 감정을 일기로 기록하면 AI가 감정을 분석, 요약, 감정에 맞는 음악을 추천해주는 다이어리입니다.',
    image: 'public/assets/images/LuneDiary.png',
    techIcons: [reactIcon, typeScriptIcon, tailwindCssIcon],
    deployUrl: 'https://lune-diary.netlify.app/', // 배포 URL
    notionUrl: 'https://heavenly-earl-cb3.notion.site/Project-Lune-Diary-2d212196d3be8003ae9fcffd981e776d', // 노션 URL
  },
  {
    id: 'hana-agent-chat',
    title: 'Hana Agent Chat',
    description: 'OpenAI API를 활용하여 다양한 AI 에이전트와 실시간 대화를 제공하는 간소화된 채팅 애플리케이션입니다.',
    image: 'public/assets/images/HanaAgentChat.png',
    techIcons: [reactIcon, typeScriptIcon, tailwindCssIcon],
    notionUrl: 'https://heavenly-earl-cb3.notion.site/Project-HaNa-Agent-Chat-2b912196d3be80c58fc8dfc6ed60953a',
  },
  {
    id: 'portfolio',
    title: '포트폴리오 사이트',
    description: '저를 소개하는 포트폴리오 사이트 입니다.',
    image: 'public/assets/images/Portfolio.png',
    techIcons: [reactIcon, typeScriptIcon, tailwindCssIcon],
    deployUrl: 'https://kky-portfolio.netlify.app/',
    notionUrl: 'https://heavenly-earl-cb3.notion.site/Project-KKY-s-2a212196d3be803d807df1b6707d678d',
  },
  {
    id: 'visual-etl-builder',
    title: 'Visual ETL Builder',
    description: 'Airflow, AWS Glue 와 유사한 비주얼 파이프라인 빌더를 구현한 프로젝트입니다.',
    image: 'public/assets/images/VisualEtlBuilder.png',
    techIcons: [reactIcon, typeScriptIcon, tailwindCssIcon],
    notionUrl: 'https://heavenly-earl-cb3.notion.site/Project-Visual-ETL-Builder-2d212196d3be80abb2f2f411acb1512e',
  },
  {
    id: 'blog',
    title: '개인 블로그 사이트',
    description: 'React로 구현한 개인 블로그입니다.',
    image: 'public/assets/images/Blog.png',
    techIcons: [reactIcon, typeScriptIcon, tailwindCssIcon],
    notionUrl: 'https://heavenly-earl-cb3.notion.site/Project-KKY-s-Blog-2d212196d3be80ff9adbc98ca50df159',
  },
];

function Project() {
  return (
    <Section id="Project" className="bg-transparent">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center sm:text-left">
          <span className="relative z-10 text-gray-200 dark:text-white">Project</span>
          <span
            className="absolute top-0 left-0 text-blue-400 dark:text-blue-400"
            style={{ transform: 'translate(4px, 4px)', zIndex: 0 }}
          >
            Project
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="cursor-pointer group h-full flex flex-col overflow-hidden p-0 relative transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* 이미지 영역 */}
              <div className="relative h-1/2 min-h-[200px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">사진</p>
                )}
              </div>

              {/* 텍스트 영역 */}
              <div className="h-1/2 flex flex-col justify-between p-4 sm:p-6 bg-gray-50 dark:bg-gray-800">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.techIcons.map((icon, index) => (
                    <img
                      key={index}
                      className="w-6 sm:w-8 transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${index * 50}ms` }}
                      src={icon}
                      alt={`Tech ${index}`}
                    />
                  ))}
                </div>
              </div>

              {/* Hover 오버레이 */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="flex flex-col text-center gap-2 sm:gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-4">
                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-110 transform"
                    >
                      자세히 보기
                    </a>
                  )}
                  {project.notionUrl && (
                    <a
                      href={project.notionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-100 text-gray-900 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-110 transform"
                    >
                      Notion 바로가기
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Project;
