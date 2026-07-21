import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const quickFacts = [
    "Currently studying at SASTRA University",
    "Completed internship at Elena Geo Tech",
    "Completed internship at Ramco Cements",
    "Certified in multiple technical courses",
    "Based in Ariyalur, Tamil Nadu"
  ];

  const certifications = [
    { title: "NPTEL", desc: "Project Management", detail: "Professional coordination & execution frameworks" },
    { title: "Ministry of Heavy Industry", desc: "VR Applications Development", detail: "Unity 3D based Virtual Reality systems" },
    { title: "CSC", desc: "Diploma in C Programming", detail: "Core programming structures & computer science fundamentals" }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate Computer Science and Business Systems graduate with a drive for innovation and continuous learning
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Objective Card */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="h-full border border-border/60 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-primary to-primary-glow rounded-xl p-3 mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">My Objective</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    Motivated B.Tech Computer Science and Business Systems graduate with strong programming skills in Python and C++, combined with a practical understanding of business processes, ERP systems, and data-driven decision-making gained through academic projects and internship experience. Seeking to begin a career in software development where I can apply this blend of technical and business knowledge to build real-world solutions, contribute to organizational goals, and grow as a well-rounded engineer within a dynamic team environment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border border-border/60 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 tracking-tight flex items-center gap-2 border-b pb-3 border-border/60">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  {quickFacts.map((fact, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-start space-x-3 cursor-default"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary-glow flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm font-medium hover:text-white transition-colors">
                        {fact}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Technical Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Card className="border border-border/60 hover:border-primary/30 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-primary to-primary-glow rounded-xl p-3 mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Technical Certifications</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="p-5 rounded-2xl border border-border/50 bg-secondary/15 hover:bg-secondary/30 hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1 tracking-tight">{cert.title}</h4>
                      <p className="font-semibold text-white text-sm mb-3">{cert.desc}</p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cert.detail}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;