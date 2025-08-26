import { Button } from '@/components/ui/button';
import { Download, Mail, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden" style={{background: 'linear-gradient(to bottom right, hsl(24, 90%, 58%), hsl(30, 100%, 70%))'}}>
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white text-sm font-medium">Hello!</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left content */}
            <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                I'm <span className="text-white">Bhuvanesh</span>,
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 mb-6">
                Computer Science and Business System Student
              </h2>
              
              <p className="text-white/80 text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Motivated BTech student with strong programming skills, seeking opportunities 
                to apply academic knowledge in real-world projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={scrollToAbout} size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full px-8">
                  View Portfolio
                </Button>
                <Button 
                  onClick={() => {
                    // Create a link to download the resume
                    const link = document.createElement('a');
                    link.href = '/Bhuvanesh_M_Resume.png';
                    link.download = 'Bhuvanesh_M_Resume.png';
                    link.click();
                  }}
                  variant="outline" 
                  size="lg" 
                  className="border-white/50 text-white bg-white/10 hover:bg-white hover:text-primary rounded-full px-8"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Right content - Profile photo */}
            <div className="lg:w-1/2 flex justify-center relative order-1 lg:order-2">
              <div className="relative">
                {/* Experience badge - bottom right of image */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-2xl p-3 sm:p-4 shadow-lg z-20">
                  <div className="text-center">
                    <div className="flex justify-center mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />)}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">3+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                  </div>
                </div>
                
                {/* Profile photo with light background */}
                <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-white/30 bg-white/10">
                  <img 
                    src="/lovable-uploads/38f0256f-e021-43a9-99c9-abc1d77a10d6.png" 
                    alt="Bhuvanesh M - Computer Science Student" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log("Image failed to load");
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => console.log("Image loaded successfully")}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;