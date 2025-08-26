import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'C++', 'R'],
      description: 'Strong foundation in core programming languages for system development and data analysis.',
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: ['Oracle SQL'],
      description: 'Experience with database design, queries, and data management using Oracle SQL.',
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['HTML', 'CSS'],
      description: 'Frontend development skills for creating responsive and modern web interfaces.',
    },
    {
      title: 'Enterprise Tools',
      icon: Cpu,
      skills: ['Rational Suite', 'ERP Systems'],
      description: 'Hands-on experience with enterprise software and system integration.',
    },
  ];

  const softSkills = [
    'Teamwork',
    'Time Management', 
    'Leadership',
    'Effective Communication',
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Tamil', level: 'Fluent' },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg text-dark-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and programming capabilities
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-dark-card border-gray-700 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-primary to-primary-glow rounded-lg p-3 w-fit mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-primary/20 text-primary-glow px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills & Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <Card className="bg-dark-card border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-primary/10 border border-primary/20"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-dark-card border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">Languages</h3>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20"
                  >
                    <span className="text-gray-300 font-medium">{language.name}</span>
                    <span className="text-primary-glow text-sm font-semibold">{language.level}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;