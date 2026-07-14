const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
          About Me
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/f99e2395-b752-4726-9553-f99996e5df56.png" 
                alt="Dhananjaya Kumar Mittapalli" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3 prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="mb-6">
              Data is the foundation, AI is the frontier. I work at the boundary between the two. Data
              Engineer is the label, though it only covers part of it. I deal in whatever the problem
              actually needs.
            </p>

            <p className="mb-6">
              3.5+ years building the unglamorous infrastructure that decides whether a model or a
              pipeline actually ships: ETL/ELT systems, data warehousing, feature stores, forecasting
              pipelines, across finance and retail (Natixis Investment Managers, Saks OFF 5th,
              TheMathCompany).
            </p>

            <p className="mb-6">
              I ramp up fast. New stacks, new domains, whatever the deadline demands. Right now that's
              machine learning and agentic AI systems, because that's where the next infrastructure
              problems are.
            </p>

            <p className="mb-6">
              If you're building systems that need to work in production, not just demo well, I'm
              interested.
            </p>

            <p>
              I'm also an anime fan and you can find what I like{" "}
              <a href="/anime" className="text-primary hover:text-primary/80 underline font-medium">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;