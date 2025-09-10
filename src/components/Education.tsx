const Education = () => {
  const education = [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Data Science",
      location: "Boston, MA",
      period: "Sept 2023 - Present",
      gpa: "GPA: 3.9/4.0",
      courses: [
        "Data Management and Processing",
        "Supervised and Unsupervised Machine Learning", 
        "Algorithms",
        "MLOps",
        "Large Language Models",
        "Natural Language Processing"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 text-center">
          Education
        </h2>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-background p-8 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.location}
                  </p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-sm text-muted-foreground mb-1">{edu.period}</p>
                  <p className="text-sm font-medium text-foreground">{edu.gpa}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">Relevant Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span 
                      key={i}
                      className="text-sm px-3 py-2 bg-muted text-muted-foreground rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;