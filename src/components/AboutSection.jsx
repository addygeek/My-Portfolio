import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
<h3 className="text-2xl font-semibold">
  Generative AI Developer & Tech Community Leader
</h3>

<p className="text-muted-foreground">
  I specialize in building impactful AI-driven products using tools like React.js, Firebase, and OpenAI APIs. My work ranges from AI image generators to smart community platforms.
</p>

<p className="text-muted-foreground">
  As a Google Developer Groups Lead, I’ve organised global big hackathons, conducted dev sessions, and helped more than 400+ students to grow. I love leading from the front — blending deep tech with product vision to build what truly matters.
</p>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/projects/cv.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                      Crafting responsive, fast, and scalable web apps using React.js, Next.js, and modern backend technologies like Node.js and Firebase.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Generative AI Developer</h4>
                  <p className="text-muted-foreground">
      Building intelligent systems using LLMs, RAG pipelines, and custom AI agents. Skilled in OpenAI, LangChain, and deploying GenAI solutions tailored for real-world use.              </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Product & Project Leadership</h4>
                  <p className="text-muted-foreground">
                    Leading cross-functional teams to turn AI ideas into polished products. Experienced in managing hackathon-winning projects and mentoring others in GDSC and developer communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
