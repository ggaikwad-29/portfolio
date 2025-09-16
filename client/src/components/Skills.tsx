import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Code, Database, Brain, GitBranch, Cloud, Cpu, BarChart, Zap } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  // todo: replace with user's actual skills
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "C", "C++", "R", "SQL", "CUDA"]
    },
    {
      title: "AI/ML Frameworks",
      icon: <Brain className="w-5 h-5" />,
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Transformers", "OpenCV", "Pandas", "NumPy"]
    },
    {
      title: "Specialized Areas",
      icon: <Zap className="w-5 h-5" />,
      skills: ["Machine Learning", "Natural Language Processing", "Deep Learning", "Computer Vision", "Convolutional Neural Networks", "MLOps", "RNN", "MLP"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS", "Docker"]
    },
    {
      title: "Distributed Systems",
      icon: <Cpu className="w-5 h-5" />,
      skills: ["Load Balancing", "Distributed Training"]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-5 h-5" />,
      skills: ["PostgreSQL", "MongoDB", "MLflow",  "Jupyter"]
    },
    {
      title: "Data Science",
      icon: <BarChart className="w-5 h-5" />,
      skills: ["Data Analysis", "Statistical Modeling", "A/B Testing", "Feature Engineering", "Time Series Analysis", "Matplotlib"]
    },
    {
      title: "Development",
      icon: <GitBranch className="w-5 h-5" />,
      skills: ["Git", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive toolkit for AI/ML development, from research to production deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-md hover-elevate" data-testid={`card-skill-category-${index}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-sm text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs mr-2 mb-2 inline-block"
                    data-testid={`badge-skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}