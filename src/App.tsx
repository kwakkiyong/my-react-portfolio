import Header from '@components/header/Header.tsx';
import Main from '@pages/main/Main.tsx';
import CustomScrollBar from '@components/nav/CustomScrollBar.tsx';
import AboutMe from '@pages/aboutMe/AboutMe.tsx';
import Skills from '@pages/skills/Skills.tsx';
import Interview from '@pages/interview/Interview.tsx';
import Career from '@pages/career/Career.tsx';
import Project from '@pages/project/Project.tsx';
import Contact from '@pages/contact/Contact.tsx';
import PersistentAnimatedBackground from '@components/atoms/background/PersistentAnimatedBackground.tsx';

function App() {
  return (
    <div className="min-h-screen transition-colors">
      <PersistentAnimatedBackground />
      <Header />
      <Main />
      <CustomScrollBar />
      <AboutMe />
      <Interview />
      <Skills />
      <Career />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
