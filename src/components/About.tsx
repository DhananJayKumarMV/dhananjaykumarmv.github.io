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
              I'm a passionate Data Science Engineer with expertise in machine learning, big data processing, 
              and analytics. Currently pursuing my Master's in Data Science at Northeastern University, 
              I have hands-on experience building scalable data solutions and automating complex workflows.
            </p>
            
            <p className="mb-6">
              My professional journey spans across various industries where I've successfully implemented 
              data-driven solutions, developed predictive models, and created actionable insights that drive 
              business decisions. I bring hands-on experience with Python, R, SQL, cloud technologies, 
              and AI frameworks — applying them in real-world projects across analytics, automation, and intelligent systems.
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