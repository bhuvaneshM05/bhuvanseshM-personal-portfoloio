import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'C++', 'Python', 'R'],
      description: 'Strong foundation in core programming languages for system development, AI services, and data analysis.',
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: ['MongoDB', 'ChromaDB', 'Oracle SQL'],
      description: 'Experience with document databases, vector databases for semantic search, and traditional relational databases.',
    },
    {
      title: 'Web & AI Technologies',
      icon: Globe,
      skills: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'RAG Chatbots', 'LLMs'],
      description: 'Full-stack development capabilities integrating modern frontend frameworks with AI-powered RAG backend APIs.',
    },
    {
      title: 'Enterprise Tools',
      icon: Cpu,
      skills: ['Rational Suite', 'ERP Systems'],
      description: 'Hands-on experience with enterprise systems, business processes, and system integration.',
    },
  ];

  const softSkills = [
    'Teamwork',
    'Time Management', 
    'Leadership',
    'Effective Communication',
  ];

  const languages = [
    { name: 'English', level: 'Fluent', percentage: 90 },
    { name: 'Tamil', level: 'Fluent', percentage: 95 },
    { name: 'Telugu', level: 'Conversational', percentage: 70 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 bg-dark-bg text-dark-foreground relative overflow-hidden">
      {/* Decorative background visual elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and programming capabilities
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-dark-card border-gray-700/60 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5 h-full flex flex-col justify-between">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="bg-gradient-to-r from-primary to-primary-glow rounded-xl p-3 w-fit mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{category.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span 
                            key={skillIndex}
                            whileHover={{ scale: 1.08, backgroundColor: "rgba(249, 115, 22, 0.3)" }}
                            className="bg-primary/20 text-primary-glow px-3 py-1 rounded-full text-xs font-semibold cursor-default border border-primary/10 transition-colors"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed mt-auto">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Soft Skills & Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-dark-card border-gray-700/60 hover:border-primary/30 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight border-b pb-3 border-gray-800">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.03, backgroundColor: "rgba(249, 115, 22, 0.15)" }}
                      className="flex items-center space-x-2.5 p-3.5 rounded-xl bg-primary/10 border border-primary/20 cursor-default transition-all"
                    >
                      <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                      <span className="text-gray-300 font-semibold text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-dark-card border-gray-700/60 hover:border-primary/30 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight border-b pb-3 border-gray-800">Languages</h3>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <div key={index} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-bold text-sm">{language.name}</span>
                        <span className="text-primary-glow text-xs font-bold uppercase tracking-wider">{language.level}</span>
                      </div>
                      {/* Interactive Fluent Progress Bar */}
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden border border-gray-700">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${language.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;