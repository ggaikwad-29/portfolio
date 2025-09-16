import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  university: string;
  program: string;
  gpa: string;
  period: string;
  coursework?: string[];
}

export default function Education() {
  // todo: replace with user's actual education data
  const educationData: EducationItem[] = [
    {
      degree: "Master's Degree",
      university: "Illinois Institute of Technology (IIT)",
      program: "Artificial Intelligence",
      gpa: "3.0/4.0",
      period: "2024 - 2026",
      coursework: ["Advanced Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Data Preparation and Analysis"]
    },
    {
      degree: "Bachelor's Degree",
      university: "Savitribai Phule Pune University",
      program: "Computer Science",
      gpa: "3.615/4.0", 
      period: "2019 - 2023",
      coursework: ["Artificial Intelligence","Machine Learning","CNN", "Data Structures", "Algorithms", "Software Engineering", "Database Systems", "Statistics"]
    }
  ];

  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in artificial intelligence and computer science
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="shadow-md hover-elevate" data-testid={`card-education-${index}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <p className="text-lg font-semibold text-primary mb-1">{edu.program}</p>
                    <p className="text-muted-foreground font-medium">{edu.university}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <Badge variant="secondary" data-testid={`badge-gpa-${index}`}>
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              {edu.coursework && (
                <CardContent>
                  <h4 className="font-medium text-foreground mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge 
                        key={courseIndex} 
                        variant="outline"
                        className="text-xs"
                        data-testid={`badge-course-${index}-${courseIndex}`}
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}