import Section from '@components/layout/Section';
import SkillsCarousel from '@components/skills/SkillsCarousel';
import { skillCategories } from '@data/skills';

function Skills() {
  return (
    <Section id="Skills" className="bg-transparent">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center sm:text-left">
          Skills
        </h1>
        <SkillsCarousel categories={skillCategories} />
      </div>
    </Section>
  );
}

export default Skills;
