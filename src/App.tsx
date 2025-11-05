import Header from '@components/header/Header.tsx';
import Main from '@pages/main/Main.tsx';
import CustomScrollBar from '@components/nav/CustomScrollBar.tsx';
import Skills from '@pages/skills/Skills.tsx';
import AboutMe from '@pages/aboutMe/AboutMe.tsx';
import Career from '@pages/career/Career.tsx';
import Contact from '@pages/contact/Contact.tsx';
import PersistentAnimatedBackground from '@components/atoms/background/PersistentAnimatedBackground.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <PersistentAnimatedBackground />
      <Header />
      <Main />
      <CustomScrollBar />
      <AboutMe />
      <Skills />
      <Career />
      <Contact />
    </div>
  );
}

export default App;
