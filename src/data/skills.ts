import reactIcon from '@assets/icons/React.svg';
import typeScriptIcon from '@assets/icons/TypeScript.svg';
import javaScriptIcon from '@assets/icons/JavaScript.svg';
import tailwindCssIcon from '@assets/icons/TailwindCSS.svg';
import cssIcon from '@assets/icons/CSS.svg';
import senchaIcon from '@assets/icons/Sencha.svg';
import javaIcon from '@assets/icons/Java.svg';
import mysqlIcon from '@assets/icons/MySQL.svg';
import oracleIcon from '@assets/icons/Oracle.svg';
import postgresqlIcon from '@assets/icons/PostgreSQL.svg';
import prometheusIcon from '@assets/icons/Prometheus.svg';
import githubIcon from '@assets/icons/Github.svg';
import gitlabIcon from '@assets/icons/GitLab.svg';
import ideaIcon from '@assets/icons/Idea.svg';
import figmaIcon from '@assets/icons/Figma.svg';
import slackIcon from '@assets/icons/Slack.svg';
import linuxIcon from '@assets/icons/Linux.svg';

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: '프론트엔드',
    skills: [
      {
        name: 'React',
        icon: reactIcon,
        description: '구조를 이해하고 여러 Hook을 사용하여 개발했습니다.',
      },
      {
        name: 'TypeScript',
        icon: typeScriptIcon,
        description: '타입 안정성을 활용한 안전한 코드 작성 경험이 있습니다.',
      },
      {
        name: 'JavaScript',
        icon: javaScriptIcon,
        description: 'ES6+ 문법과 비동기 처리에 능숙합니다.',
      },
      {
        name: 'TailwindCSS',
        icon: tailwindCssIcon,
        description: '유틸리티 기반 스타일링으로 빠른 UI 개발이 가능합니다.',
      },
      {
        name: 'CSS',
        icon: cssIcon,
        description: '반응형 디자인과 애니메이션 구현에 익숙합니다.',
      },
      {
        name: 'Sencha',
        icon: senchaIcon,
        description: '엔터프라이즈급 웹 애플리케이션 개발 경험이 있습니다.',
      },
    ],
  },
  {
    title: '백엔드',
    skills: [
      {
        name: 'Java',
        icon: javaIcon,
        description: 'Spring Framework 기반 RESTful API 개발 경험이 있습니다.',
      },
      {
        name: 'MySQL',
        icon: mysqlIcon,
        description: '데이터베이스 설계 및 쿼리 최적화 경험이 있습니다.',
      },
      {
        name: 'Oracle',
        icon: oracleIcon,
        description: '대용량 데이터 처리 및 파이프라인 구축 경험이 있습니다.',
      },
      {
        name: 'PostgreSQL',
        icon: postgresqlIcon,
        description: '관계형 데이터베이스 설계 및 성능 최적화 경험이 있습니다.',
      },
      {
        name: 'Prometheus',
        icon: prometheusIcon,
        description: '시스템 모니터링 및 메트릭 수집 도구 활용 경험이 있습니다.',
      },
    ],
  },
  {
    title: 'Tool',
    skills: [
      {
        name: 'GitHub',
        icon: githubIcon,
        description: '버전 관리 및 협업을 위한 GitHub 사용에 익숙합니다.',
      },
      {
        name: 'GitLab',
        icon: gitlabIcon,
        description: '버전 관리 및 협업을 위한 GitLab 사용에 익숙합니다.',
      },
      {
        name: 'IntelliJ IDEA',
        icon: ideaIcon,
        description: '개발에 주로 사용하며 다양한 플러그인 활용에 능숙합니다.',
      },
      {
        name: 'Figma',
        icon: figmaIcon,
        description: '디자인 시안 확인 및 협업 도구로 활용합니다.',
      },
      {
        name: 'Slack',
        icon: slackIcon,
        description: '팀 커뮤니케이션 및 프로젝트 협업 도구로 활용합니다.',
      },
    ],
  },
  {
    title: 'Etc',
    skills: [
      {
        name: 'Linux',
        icon: linuxIcon,
        description: '서버 환경 구축 및 명령어 사용에 익숙합니다.',
      },
    ],
  },
];
