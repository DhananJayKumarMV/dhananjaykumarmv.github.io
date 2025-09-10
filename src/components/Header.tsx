import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-foreground">DM</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:bg-nav-hover px-3 py-2 rounded-md"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:bg-nav-hover px-3 py-2 rounded-md"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:bg-nav-hover px-3 py-2 rounded-md"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:bg-nav-hover px-3 py-2 rounded-md"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:bg-nav-hover px-3 py-2 rounded-md"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:bg-nav-hover px-3 py-2 rounded-md"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:bg-nav-hover px-3 py-2 rounded-md"
            >
              Contact
            </button>
          </nav>

          {/* Email Button */}
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open('mailto:mittapalli.d@northeastern.edu')}
          >
            Email Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;