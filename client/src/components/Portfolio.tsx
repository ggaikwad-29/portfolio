import Navigation from './Navigation';
import Hero from './Hero';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import ResearchPapers from './ResearchPapers';
import Contact from './Contact';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="scroll-smooth">
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <ResearchPapers />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Gayatri Sanjay Gaikwad. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Designed for AI/ML job applications and professional networking.
          </p>
        </div>
      </footer>
    </div>
  );
} 