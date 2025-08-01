import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Indian GenAI Image Platform",
    description:
      "A culturally-aware AI image generation platform built using Stable Diffusion for Indian contexts. Supports custom prompts and style tuning.",
    image: "/projects/genai-india.png",
    tags: ["Stable Diffusion", "Next.js", "Python", "AI"],
    demoUrl: "https://indian-image-generation-platform.vercel.app/",
    githubUrl: "https://github.com/addygeek/INDIAN-IMAGE-GEN-ADITYA-STARTUP.git",
  },
  {
    id: 2,
    title: "ONDC E-commerce Marketplace",
    description:
      "A MERN stack-based e-commerce platform aligned with India's ONDC mission. Features vendor onboarding, product search, and secure checkout.",
    image: "/projects/ondc.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    demoUrl: "https://github.com/addygeek/ONDC-PLATFORM.git",
    githubUrl: "https://github.com/addygeek/ONDC-PLATFORM.git",
  },
  {
    id: 3,
    title: "DarexAI Startup Website",
    description:
      "A sleek full-stack startup website for DarexAI, built with modern design and SEO-friendly architecture to showcase AI-powered products.",
    image: "/projects/darexai.png",
    tags: ["Next.js", "TailwindCSS", "Vercel"],
    demoUrl: "http://darexai.com/",
    githubUrl: "http://darexai.com/",
  },
  {
    id: 4,
    title: "n8n Automations",
    description:
      "A collection of n8n automations for various tasks, including attendance tracking and data processing. Utilizes n8n's powerful workflow automation capabilities.",
    image: "/projects/attendance.png",
    tags: ["AI Automation", "n8n", "AI Engineering"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Ask Us - Community Website – GDSC Hackathon",
    description:
      "A full-stack community Q&A platform, built for the GDSC Dev Heat Beta. Secured 2nd place with real-time posting, voting, and moderation.",
    image: "/projects/askus.png",
    tags: ["React", "Firebase", "Hackathon Winner"],
    demoUrl: "https://github.com/addygeek/Devheat_Beta_Code_Hunter",
    githubUrl: "https://github.com/addygeek/Devheat_Beta_Code_Hunter",
  },
  {
    id: 6,
    title: "IP AI Agent - AI Agent for Digital Identity",
    description:
      "Build Blockchain-based AI agents for secure digital identity management. Integrates with OpenAI and LangChain for intelligent interactions.",
    image: "/projects/aiagent.png",
    tags: ["Blockchain", "AI Agent", "Langchain", "Web3"],
    demoUrl: "https://addygeek.github.io/surreal-blockchain-ai-agent-ip-hackathon-project/",
    githubUrl: "#https://github.com/addygeek/surreal-blockchain-ai-agent-ip-hackathon-project?tab=readme-ov-file",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/addygeek"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
