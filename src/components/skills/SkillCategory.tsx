import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card.tsx';
import SkillItem from './SkillItem';
import { SkillCategory as SkillCategoryType } from '@data/skills';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  if (category.skills.length === 0) {
    return null;
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">{category.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-sm sm:text-base md:text-base leading-relaxed space-y-2 min-h-[480px]">
          {category.skills.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} icon={skill.icon} description={skill.description} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
