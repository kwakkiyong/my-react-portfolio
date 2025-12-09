# 개요

---
React 19, TypeScript, Tailwind CSS를 사용한 개인 포트폴리오 프로젝트입니다.

# 설명

---


# 필수 요구사항

---
- Node.js 18.0.0 이상
- npm 또는 yarn

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
my_portfolio/
├── public/                 # 정적 파일
├── src/
│   ├── assets/            # 이미지, 아이콘 등 리소스
│   │   ├── images/
│   │   └── icons/
│   ├── components/         # 재사용 가능한 컴포넌트
│   ├── data/              # 정적 데이터
│   ├── hooks/             # 커스텀 훅
│   ├── pages/             # 페이지 컴포넌트
│   ├── store/             # 상태 관리 (Redux 등)
│   ├── styles/            # 스타일 관련 파일
│   ├── types/             # TypeScript 타입 정의
│   ├── utils/             # 유틸리티 함수
│   ├── App.tsx            # 메인 앱 컴포넌트
│   ├── main.tsx           # 진입점
│   └── index.css          # 전역 CSS
├── .eslintrc.cjs          # ESLint 설정
├── .prettierrc            # Prettier 설정
├── package.json
├── tailwind.config.js     # Tailwind CSS 설정
├── tsconfig.json          # TypeScript 설정
└── vite.config.ts         # Vite 설정
```

## 🛠️ 기술 스택

- **React 19**: 최신 React 버전
- **TypeScript**: 타입 안정성
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **Vite**: 빠른 빌드 도구
- **React Router**: 라우팅
- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅

## 📝 개발 가이드

### 코드 스타일 및 포맷팅

#### Prettier 설정

프로젝트는 Prettier를 사용하여 자동 포맷팅을 수행합니다.

```bash
# 모든 파일 포맷팅
npm run format

# 포맷팅 검사만 수행
npm run format:check
```

Prettier 설정은 `.prettierrc` 파일에서 확인할 수 있습니다:
- printWidth: 120
- singleQuote: true
- trailingComma: all
- tabWidth: 2
- semi: true

#### ESLint 설정

ESLint를 사용하여 코드 품질을 관리합니다.

```bash
# 린트 검사
npm run lint

# 자동 수정
npm run lint:fix
```

ESLint 규칙은 `.eslintrc.cjs` 파일에서 확인할 수 있습니다.

### Path Alias 사용

프로젝트는 경로 별칭을 사용하여 깔끔한 import를 지원합니다:

```typescript
// ❌ 절대 경로
import Button from '../../../components/Button';

// ✅ Path Alias 사용
import Button from '@components/Button';
```

사용 가능한 별칭:
- `@pages/*` → `src/pages/*`
- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@styles/*` → `src/styles/*`
- `@types/*` → `src/types/*`
- `@utils/*` → `src/utils/*`
- `@hooks/*` → `src/hooks/*`
- `@store/*` → `src/store/*`
- `@data/*` → `src/data/*`

### Tailwind CSS 사용

Tailwind CSS를 사용하여 스타일을 작성합니다.

```tsx
// 예시
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <h1 className="text-4xl font-bold text-gray-800">Hello World</h1>
</div>
```

커스텀 색상이나 애니메이션을 추가하려면 `tailwind.config.js` 파일을 수정하세요:

```javascript
theme: {
  extend: {
    colors: {
      'custom-blue': '#1e40af',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
  },
}
```

### TypeScript 사용

모든 컴포넌트와 함수는 TypeScript로 작성합니다.

```typescript
// 타입 정의 예시
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      {label}
    </button>
  );
};
```

### 컴포넌트 구조

컴포넌트는 기능별로 폴더를 나누어 관리합니다:

```
components/
├── button/
│   ├── Button.tsx
│   └── Button.styled.tsx  (필요시)
├── card/
│   └── Card.tsx
└── ...
```

### 페이지 구조

페이지는 `src/pages` 폴더에 구성합니다:

```
pages/
├── home/
│   └── Home.tsx
├── about/
│   └── About.tsx
└── ...
```

## 📦 주요 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run preview`: 빌드 결과 미리보기
- `npm run lint`: ESLint 검사
- `npm run lint:fix`: ESLint 자동 수정
- `npm run format`: Prettier로 포맷팅
- `npm run format:check`: 포맷팅 검사