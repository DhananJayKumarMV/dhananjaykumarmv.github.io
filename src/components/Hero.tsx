import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-avatar-bg flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-semibold text-avatar-text">DM</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-light text-foreground mb-4">
          Dhananjaya Kumar Mittapalli
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          Master of Science in Data Science • Data Science Engineer
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Building intelligent, data-driven solutions with expertise in machine learning, 
          big data processing, and cloud technologies. Passionate about solving real-world problems through analytics.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            variant="default" 
            className="flex items-center gap-2"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="w-4 h-4" />
            Download Resume (PDF)
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => window.open('https://github.com/DhananJayKumarMV', '_blank')}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => window.open('https://www.linkedin.com/in/dhananjaya-kumar-venkata-mittapalli/', '_blank')}
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => window.open('mailto:mittapalli.d@northeastern.edu')}
          >
            <Mail className="w-4 h-4" />
            Email Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;