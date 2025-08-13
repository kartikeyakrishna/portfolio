import { Code, Database, Globe, Brain, GitBranch } from 'lucide-react';
import { 
  FaPython, 
  FaReact, 
  FaHtml5, 
  FaGitAlt, 
  FaGithub, 
  FaDocker 
} from 'react-icons/fa';
import { 
  DiJavascript1, 
  DiMongodb, 
  DiMysql, 
  DiPostgresql 
} from 'react-icons/di';
import { 
  SiFlask, 
  SiDjango, 
  SiOpenai, 
  SiOpencv, 
  SiNumpy, 
  SiPandas, 
  SiScikitlearn, 
  SiConfluence 
} from 'react-icons/si';

const Skills = () => {
  // Icon mapping for each skill
  const skillIcons: { [key: string]: React.JSX.Element } = {
    'Python': <FaPython className="text-blue-500" size={20} />,
    'JavaScript': <DiJavascript1 className="text-yellow-500" size={20} />,
    'C/C++': <Code className="text-blue-600" size={20} />,
    'HTML/CSS': <FaHtml5 className="text-orange-500" size={20} />,
    'React': <FaReact className="text-blue-400" size={20} />,
    'Flask': <SiFlask className="text-gray-800 dark:text-white" size={20} />,
    'Django': <SiDjango className="text-green-700" size={20} />,
    'OpenAI': <SiOpenai className="text-green-600" size={20} />,
    'OpenAI function calling': <SiOpenai className="text-green-600" size={20} />,
    'OpenCV': <SiOpencv className="text-blue-600" size={20} />,
    'Tesseract OCR': <Brain className="text-purple-600" size={20} />,
    'SVM Models': <Brain className="text-purple-600" size={20} />,
    'NumPy': <SiNumpy className="text-blue-600" size={20} />,
    'Pandas': <SiPandas className="text-purple-600" size={20} />,
    'scikit-learn': <SiScikitlearn className="text-orange-500" size={20} />,
    'PostgreSQL': <DiPostgresql className="text-blue-600" size={20} />,
    'MongoDB': <DiMongodb className="text-green-600" size={20} />,
    'MySQL': <DiMysql className="text-blue-500" size={20} />,
    'PowerBI': <Database className="text-yellow-500" size={20} />,
    'Docker': <FaDocker className="text-blue-500" size={20} />,
    'Confluence': <SiConfluence className="text-blue-600" size={20} />,
    'Git': <FaGitAlt className="text-orange-600" size={20} />,
    'GitHub': <FaGithub className="text-gray-800 dark:text-white" size={20} />
  };

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'C/C++' },
        { name: 'HTML/CSS' }
      ]
    },
    {
      title: 'Frameworks',
      icon: <Globe className="text-green-600" size={24} />,
      skills: [
        { name: 'React' },
        { name: 'Flask' },
        { name: 'Django' }
      ]
    },
    {
      title: 'AI/ML',
      icon: <Brain className="text-purple-600" size={24} />,
      skills: [
        { name: 'OpenAI' },
        { name: 'OpenAI function calling' },
        { name: 'OpenCV' },
        { name: 'Tesseract OCR' },
        { name: 'SVM Models' },
        { name: 'NumPy' },
        { name: 'Pandas' },
        { name: 'scikit-learn' }
      ]
    },
    {
      title: 'Databases/Tools',
      icon: <Database className="text-orange-600" size={24} />,
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'PowerBI' },
        { name: 'Docker' },
        { name: 'Confluence' }
      ]
    },
    {
      title: 'DevOps & Version Control',
      icon: <GitBranch className="text-red-600" size={24} />,
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Docker' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-white mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-black hover:bg-gray-100 dark:hover:bg-black transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      {skillIcons[skill.name] || <Code className="text-gray-500" size={20} />}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-white dark:bg-black rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Skills Summary
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-sm text-gray-600 dark:text-white">Programming Languages & Frameworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-sm text-gray-600 dark:text-white">AI/ML Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
              <div className="text-sm text-gray-600 dark:text-white">Database Systems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-sm text-gray-600 dark:text-white">Years of Experience</div>
            </div>
          </div>
        </div>

        {/* Certifications or Achievements */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-lg text-sm font-medium">
              87% Accuracy SVM Model
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm font-medium">
              13K+ Employee Records Processed
            </span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-medium">
              80% Manual Effort Reduction
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg text-sm font-medium">
              25+ Qualified Leads Generated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
