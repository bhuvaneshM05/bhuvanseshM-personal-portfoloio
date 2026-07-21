import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award, BookOpen, Layers, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science and Business Systems',
      institution: 'SASTRA University, Thanjavur',
      duration: '2023 - 2027',
      status: 'Current',
      icon: GraduationCap,
      description: 'Pursuing Bachelor of Technology with specialization in Computer Science and Business Systems, focusing on software development, business analytics, and system design.',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Vidya Mandir Matriculation Higher Secondary School',
      duration: '2021 - 2023',
      status: 'Completed',
      icon: BookOpen,
      description: 'Completed higher secondary education with strong foundation in mathematics and physics.',
    },
  ];

  const highlights = [
    { value: '4', label: 'Years of Study', icon: Layers },
    { value: '3', label: 'Certifications', icon: Award },
    { value: '10+', label: 'Technical Skills', icon: BookOpen },
    { value: '2', label: 'Internships', icon: Briefcase },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow path */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-[80%] border-l-2 border-dashed border-gray-200/40 pointer-events-none hidden md:block" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Education</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </motion.div>

        {/* Timeline items */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-12 relative"
        >
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative md:pl-16 pl-0"
              >
                {/* Timeline Node Point (Large screen) */}
                <div className="absolute left-4 top-2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111118] border-2 border-primary flex items-center justify-center shadow-lg z-20 group hidden md:flex transition-transform hover:scale-110">
                  <Icon className="h-5 w-5 text-primary-glow animate-pulse" />
                </div>

                <Card className="relative overflow-hidden border border-border/60 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-4">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-xl p-3 mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 md:hidden">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">{edu.degree}</h3>
                          <p className="text-primary-glow font-semibold mt-0.5">{edu.institution}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full border border-border/40">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          <span>{edu.duration}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          edu.status === 'Current' 
                            ? 'bg-primary/20 text-primary border border-primary/30 animate-pulse' 
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {edu.description}
                    </p>
                  </CardContent>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-bl-full group-hover:scale-110 transition-transform duration-300" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Academic Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <Card className="border border-border/60 hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-white tracking-tight">Academic Highlights</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((highlight, idx) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="text-center p-4 rounded-2xl bg-secondary/10 border border-border/40 hover:border-primary/20 hover:bg-secondary/20 transition-all cursor-pointer"
                    >
                      <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3 border border-primary/20">
                        <Icon className="h-6 w-6 text-primary-glow" />
                      </div>
                      <span className="text-3xl font-extrabold text-white block mb-1">{highlight.value}</span>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{highlight.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;