import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Star, Sparkles, Code2, Cpu, Laptop, Terminal } from 'lucide-react';

const HeroSection = () => {
  // Scroll handlers
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Typewriter effect for roles
  const roles = [
    "Computer Science & Business Systems Graduate",
    "Full-Stack Developer",
    "AI & RAG Chatbot Creator",
    "Software Engineer"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 25 : 60;

    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // 3D Tilt effect on mouse move
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Maximum 8 degrees rotation
    setTilt({
      x: (y / (rect.height / 2)) * -8,
      y: (x / (rect.width / 2)) * 8
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 bg-background relative overflow-hidden">
      {/* Dynamic background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="container mx-auto px-4 z-10">
        <div 
          className="relative rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden transition-all duration-300 shadow-2xl" 
          style={{
            background: 'linear-gradient(135deg, hsl(24, 90%, 58%) 0%, hsl(30, 100%, 65%) 100%)'
          }}
        >
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.15),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Decorative floating blur shapes */}
          <div className="absolute top-12 right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-float-slow pointer-events-none" />
          <div className="absolute bottom-12 left-12 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-float-delayed pointer-events-none" />

          {/* Greeting Badge */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 border border-white/25 flex items-center gap-2 hover:bg-white/20 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-amber-200 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-white text-xs md:text-sm font-medium tracking-wide">Welcome to my Space</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-4 lg:mt-0">
            {/* Left Content */}
            <div className="lg:w-7/12 text-center lg:text-left order-2 lg:order-1 relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-sm">
                I'm <span className="underline decoration-wavy decoration-white/50 underline-offset-4">Bhuvanesh</span>
              </h1>
              
              {/* Typewriter role display */}
              <div className="h-16 md:h-12 flex items-center justify-center lg:justify-start mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95 flex items-center min-h-[40px] drop-shadow-sm">
                  <span>{currentText}</span>
                  <span className="w-1.5 h-7 md:h-8 bg-white ml-1 animate-pulse inline-block" />
                </h2>
              </div>
              
              <p className="text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Detail-oriented graduate with strong skills in Python and C++. Experienced in building RAG-based AI chatbots, CRM platforms, and full-stack applications. Eager to blend technical depth with business understanding.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={scrollToAbout} 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/95 hover:scale-105 active:scale-95 font-bold rounded-full px-8 shadow-lg hover:shadow-white/20 transition-all duration-300"
                >
                  Explore Portfolio
                </Button>
                <Button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Bhuvanesh_M_Resume.png';
                    link.download = 'Bhuvanesh_M_Resume.png';
                    link.click();
                  }}
                  variant="outline" 
                  size="lg" 
                  className="border-white/45 text-white bg-white/10 hover:bg-white hover:text-primary hover:scale-105 active:scale-95 rounded-full px-8 backdrop-blur-sm transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4 animate-bounce" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image with interactive elements */}
            <div className="lg:w-5/12 flex justify-center relative order-1 lg:order-2">
              <div 
                className="relative p-4 transition-transform duration-200 ease-out"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                }}
              >
                {/* Rotating glow ring around image */}
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/20 animate-spin" style={{ animationDuration: '40s' }} />
                <div className="absolute -inset-1 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-md opacity-70 animate-pulse-ring" />

                {/* Main Profile Image Container */}
                <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-[6px] border-white/20 shadow-2xl bg-white/10 transition-transform group">
                  <img 
                    src="/lovable-uploads/38f0256f-e021-43a9-99c9-abc1d77a10d6.png" 
                    alt="Bhuvanesh M - Portfolio Photo" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Floating Tech Badges */}
                {/* Badge 1: Python - Top Left */}
                <div className="absolute top-4 -left-6 z-20 animate-float-slow bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-2.5 shadow-lg flex items-center gap-2 hover:bg-white/25 transition-all">
                  <div className="bg-amber-400 p-1.5 rounded-lg text-white">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="text-white text-xs font-semibold pr-1">Python</span>
                </div>

                {/* Badge 2: React - Top Right */}
                <div className="absolute top-2 -right-6 z-20 animate-float-delayed bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-2.5 shadow-lg flex items-center gap-2 hover:bg-white/25 transition-all">
                  <div className="bg-sky-400 p-1.5 rounded-lg text-white animate-spin" style={{ animationDuration: '10s' }}>
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-white text-xs font-semibold pr-1">React</span>
                </div>

                {/* Badge 3: FastAPI - Bottom Left */}
                <div className="absolute bottom-6 -left-8 z-20 animate-float-delayed bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-2.5 shadow-lg flex items-center gap-2 hover:bg-white/25 transition-all">
                  <div className="bg-emerald-400 p-1.5 rounded-lg text-white">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-white text-xs font-semibold pr-1">FastAPI</span>
                </div>

                {/* Badge 4: C++ - Mid Right */}
                <div className="absolute bottom-16 -right-8 z-20 animate-float-slow bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-2.5 shadow-lg flex items-center gap-2 hover:bg-white/25 transition-all">
                  <div className="bg-indigo-400 p-1.5 rounded-lg text-white">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <span className="text-white text-xs font-semibold pr-1">C++</span>
                </div>

                {/* Projects Star Badge - Bottom Right */}
                <div className="absolute -bottom-2 right-4 z-20 bg-white rounded-2xl p-3 shadow-xl hover:scale-105 transition-transform duration-200">
                  <div className="text-center">
                    <div className="flex justify-center mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="text-lg font-extrabold text-gray-900 leading-none">3+</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;