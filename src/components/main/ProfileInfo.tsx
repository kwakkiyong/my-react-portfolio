import { Calendar, User, MapPin, Mail, GraduationCap } from 'lucide-react';

interface ProfileInfoProps {
  birthDate?: string;
  name?: string;
  location?: string;
  email?: string;
  education?: string;
}

export default function ProfileInfo({
  birthDate = '1994.12.30',
  name = '곽기용',
  location = '서울특별시 관악구',
  email = 'kky941230@naver.com',
  education = '가톨릭대학교 (정보통신전자공학부)',
}: ProfileInfoProps) {
  const infoItems = [
    { icon: User, label: '이름', value: name },
    { icon: Calendar, label: '생년월일', value: birthDate },
    { icon: MapPin, label: '위치', value: location },
    { icon: Mail, label: '이메일', value: email, isLink: true },
    { icon: GraduationCap, label: '학력', value: education },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {infoItems.map((item) => {
          const Icon = item.icon;
          const content = item.isLink ? (
            <a
              href={`mailto:${item.value}`}
              className="text-gray-700 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.value}
            </a>
          ) : (
            <p className="text-gray-700 dark:text-gray-500">{item.value}</p>
          );

          return (
            <div key={item.label} className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-5 h-5 text-gray-700 dark:text-gray-500" />
                <span className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-800">
                  {item.label}
                </span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-500 ml-7">{content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
