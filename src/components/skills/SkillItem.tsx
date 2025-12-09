interface SkillItemProps {
  name: string;
  icon: string;
  description: string;
}

export default function SkillItem({ name, icon, description }: SkillItemProps) {
  return (
    <div className="w-full flex gap-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      {icon && <img className="w-12 h-12 flex-shrink-0 object-contain" src={icon} alt={name} />}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm sm:text-base mb-1">{name}</p>
        {description && (
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
