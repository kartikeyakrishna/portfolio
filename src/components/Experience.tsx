import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Python and AI Developer Intern',
      company: 'Bythebot',
      location: 'Malaga, Spain',
      duration: 'JUL 2025 – Present, Remote',
      type: 'Current Role',
      description: [
        'Developed and deployed AI automation tools using Python, Flask, OpenAI, and third-party APIs, eliminating manual workflows across client operations',
        'Created WhatsApp and email-based AI assistants using Meta\'s API and webhook triggers, auto processing lead handling, bookings, and support tasks reducing manual effort by 80 percent',
        'Led outreach campaigns and CRM automation, generated 25+ qualified leads and directly contributed to client growth at an early-stage startup',
        'Worked directly with the founding team on both product and growth initiatives in a fast-moving startup environment'
      ],
      skills: ['Python', 'Flask', 'OpenAI API', 'WhatsApp API', 'CRM Automation', 'Lead Generation'],
      color: 'bg-green-500'
    },
    {
      title: 'Technology Intern',
      company: 'Tata Motors',
      location: 'Pune, MH',
      duration: 'May 2025 – July 2025',
      type: 'Internship',
      description: [
        'Engineered an automated HR platform that reduced month-end reporting on 13,000 employee records from days to seconds in pre-production testing',
        'Designed the database schema using Django models to onboard 13,000 employee records, unlocking real-time analytics for the HR department',
        'Translated over 50 complex Excel formulas and files into interactive visual analytics tools, working with HR in regular syncs to deliver actionable insights and train staff for rollout'
      ],
      skills: ['Django', 'Database Design', 'Data Analytics', 'Excel Integration', 'HR Systems'],
      color: 'bg-blue-500'
    },
    {
      title: 'Artificial Intelligence Research Intern',
      company: 'DLRL',
      location: 'Hyderabad, TN',
      duration: 'May 2024 – July 2024',
      type: 'Research',
      description: [
        'Engineered an SVM model achieving 87 percent accuracy for signal detection',
        'Created a GUI-based Electronic Warfare Simulator using Python, Qt, and Folium',
        'Contributed to the initiative of saving Rs. 2 crore per year by replacing real-world simulations'
      ],
      skills: ['Python', 'SVM', 'Qt', 'Folium', 'Signal Processing', 'GUI Development'],
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-white mt-4 max-w-2xl mx-auto">
            My journey through impactful internships and projects that shaped my technical expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-white"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-black border-4 border-primary-600 rounded-full flex items-center justify-center z-10">
                  <Briefcase size={16} className="text-primary-600" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${exp.color}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Location and Duration */}
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-white mb-4">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-white text-sm leading-relaxed flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-black text-gray-700 dark:text-white rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-white mb-6">
            Want to know more about my professional journey?
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&to=kartikeya.chintala@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
