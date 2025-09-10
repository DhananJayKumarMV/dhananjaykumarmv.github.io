const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "R", "SQL", "Java", "Scala", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      title: "Cloud & Big Data",
      skills: ["AWS", "Azure", "Apache Spark", "Apache Airflow", "Databricks", "Hadoop", "MapReduce", "Fivetran", "DBT"]
    },
    {
      title: "Databases & Storage",
      skills: ["Snowflake", "MySQL", "Oracle", "MongoDB", "NoSQL", "S3", "Data Lake", "Cosmos DB"]
    },
    {
      title: "Visualization & Analytics",
      skills: ["Tableau", "PowerBI", "Looker", "MicroStrategy", "Excel", "Matplotlib", "Plotly", "Adobe Analytics"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Git", "Travis CI/CD", "JIRA", "Rundeck", "Linux"]
    },
    {
      title: "Data Science & ML",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "MLOps", "Statistical Analysis", "Hypothesis Testing", "Forecasting"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 text-center">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-section-bg p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="text-sm px-3 py-2 bg-muted text-muted-foreground rounded-md hover:bg-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;