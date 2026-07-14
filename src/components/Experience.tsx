const Experience = () => {
  const experiences = [
    {
      company: "Community Dreams Foundation",
      title: "Data Engineer",
      location: "San Francisco, CA",
      period: "Feb 2026 - Present",
      achievements: [
        "Built and validated classification models in Python and SQL for a production ML investor ranking system, achieving over 80% accuracy and reducing deal preparation time through automated, data-driven targeting",
        "Automated end-to-end pricing optimization workflows in Python and SQL, building regression and forecasting pipelines with ~80% model fit and reducing manual analysis effort by 70%",
        "Built predictive and causal inference pipelines for price elasticity and demand forecasting, contributing to a 15% increase in sales",
        "Designed and deployed time series forecasting pipelines to estimate field service parts demand, reducing stockouts by 20%",
        "Built and deployed executive Tableau dashboards delivering daily, weekly, and monthly operational metrics across service, operations, and leadership teams"
      ],
      impact: "80%+ model accuracy, 70% less manual analysis effort, 15% increase in sales, 20% fewer stockouts"
    },
    {
      company: "Natixis Investment Managers",
      title: "Data Engineer",
      location: "Boston, MA, USA",
      period: "Jan 2025 - Aug 2025",
      achievements: [
        "Architected a real-time data warehouse ingestion layer using Python and Apache Kafka, streaming 50,000+ trade and AUM events per second with automated schema validation, reducing data-to-decision latency by 60%",
        "Designed dbt dimensional and star schema models on Amazon Redshift, standardizing financial KPIs and eliminating 15+ weekly manual reconciliation hours",
        "Automated ETL workflows and orchestration using Apache Airflow (Cloud Composer) on GCP, reducing daily reporting cycles by 40%",
        "Built an AI-augmented data quality monitoring system with anomaly severity classification, reducing false positive alert noise by 70% and achieving 100% SLA adherence",
        "Defined event logging schemas and data governance standards for 8 C-suite reporting datasets in Snowflake, enabling full data lineage documentation for audit compliance"
      ],
      impact: "60% lower data-to-decision latency, 40% faster reporting cycles, 100% SLA adherence"
    },
    {
      company: "SaksOFF5th",
      title: "Business Insight Engineer",
      location: "Bangalore, India",
      period: "May 2022 - Aug 2023",
      achievements: [
        "Engineered a Snowflake data warehouse with dbt star schema models capturing supply chain KPIs across 500K+ daily orders, enabling leadership to greenlight a 2-day delivery rollout",
        "Productionized an ML-driven carrier scoring model in PySpark replacing a $200K/year third-party tool, cutting fulfillment costs by 10% and carrier data procurement overhead by 95%",
        "Designed an AI-powered anomaly detection pipeline flagging inventory discrepancies and fraudulent refunds in real time, protecting $1.2M in shrink exposure with 99.7% accuracy",
        "Automated 20+ ETL batch pipelines via Apache Airflow, reducing report generation from 2 days to 2 hours (75% faster)"
      ],
      impact: "10% lower fulfillment costs, 75% faster reporting, $1.2M in shrink exposure protected"
    },
    {
      company: "TheMathCompany",
      title: "Data Engineer",
      location: "Bangalore, India",
      period: "Sep 2020 - May 2022",
      achievements: [
        "Led ETL data migration from legacy Aster and SAS databases to Snowflake with AWS S3 staging via Apache Airflow on Docker and Kubernetes, achieving a 140% increase in pipeline execution speed with <2% downtime",
        "Led a cross-functional team of 3-4 data engineers, expanding the practice from 1 to 4 engineers and securing 3 new client engagements",
        "Engineered large-scale ETL pipelines using PySpark and Apache Spark, optimizing partitioning and storage strategies across client environments",
        "Implemented automated data quality validation and schema enforcement across 30+ ingestion pipelines, achieving 99.7% accuracy and reducing downstream model retraining failures by 40%"
      ],
      impact: "140% faster pipeline execution, <2% downtime, team scaled 1 to 4 engineers"
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