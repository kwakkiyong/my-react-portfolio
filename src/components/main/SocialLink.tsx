import githubIcon from '@/assets/images/Profile_GitHub.svg';
import notionIcon from '@/assets/images/Profile_Notion.svg';

export default function SocialLink() {
  return (
    <div className="flex gap-5">
      <a
        href="https://github.com/kwakkiyong"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-lg my-4 px-3 py-1.5 border-2 border-white shadow-lg -rotate-6 hover:scale-105 transition-transform cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <img src={githubIcon} alt="Github" className="w-4 h-4" />
          <span className="text-base font-bold text-blue-400">Github</span>
        </div>
      </a>
      <a
        href="https://heavenly-earl-cb3.notion.site/2d212196d3be80cbbac6cf996bba3f71?pvs=73"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-lg my-4 px-3 py-1.5 border-2 border-white shadow-lg -rotate-6 hover:scale-105 transition-transform cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <img src={notionIcon} alt="Github" className="w-4 h-4" />
          <span className="text-base font-bold text-blue-400">Notion</span>
        </div>
      </a>
    </div>
  );
}
