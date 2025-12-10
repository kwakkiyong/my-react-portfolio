import Section from '@components/layout/Section';
import SkillsCarousel from '@components/skills/SkillsCarousel';
import { skillCategories } from '@data/skills';

function Skills() {
  return (
    <Section id="Skills" className="bg-transparent">
      <div className="px-1 w-full max-w-5xl mx-auto">
        <h1 className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 text-center sm:text-left">
          <span className="relative z-10 text-gray-200 dark:text-white">Skills</span>
          <span
            className="absolute top-0 left-0 text-blue-400 dark:text-blue-400"
            style={{ transform: 'translate(4px, 4px)', zIndex: 0 }}
          >
            Skills
          </span>
        </h1>
        <SkillsCarousel categories={skillCategories} />
      </div>
    </Section>
  );
}

export default Skills;
