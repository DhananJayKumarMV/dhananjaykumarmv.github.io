const Experience = () => {
  const experiences = [
    {
      company: "Natixis Investment Managers",
      title: "Data Science Engineer",
      location: "Boston, MA, USA",
      period: "Jan 2025 - Aug 2025",
      achievements: [
        "Developed a conversion attribution model to evaluate marketing-driven lead performance, enabling Sales to prioritize profitable client segments",
        "Engineered orchestration workflows using SQL, Python, and Rundeck to automate revenue pipeline refreshes"
      ],
      impact: "15% increase in lead conversion rates, 40% faster daily reporting cycles"
    },
    {
      company: "SaksOFF5th",
      title: "Supply Chain Business Insight Engineer",
      location: "Bangalore, India",
      period: "May 2022 - Aug 2023",
      achievements: [
        "Developed supply chain data architecture and performed statistical analysis to derive actionable insights",
        "Used SQL, Python, and Airflow to automate workflows, reducing processing time by 30%"
      ],
      impact: "Enabled launch of business initiatives, reduced report generation from 2 days to 4 hours"
    },
    {
      company: "TheMathCompany",
      title: "Data Analyst",
      location: "Bangalore, India",
      period: "Sep 2020 - May 2022",
      achievements: [
        "Led a team to productionalize data migration solutions with AWS S3 and automated ETL pipelines via Airflow",
        "Developed Tableau and MicroStrategy dashboards for marketing KPIs"
      ],
      impact: "140% increase in execution speed, <2% downtime, expanded team and projects due to client satisfaction"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 text-center">
          Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-section-bg p-8 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {exp.company}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="text-lg text-muted-foreground">{exp.title}</span>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
              
              <div className="bg-accent/50 p-4 rounded-md">
                <span className="text-sm font-medium text-foreground">Impact: </span>
                <span className="text-sm text-muted-foreground">{exp.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;