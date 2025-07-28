import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // AI & Machine Learning
  { name: "Python for AI/ML", level: 90, category: "ai" },
  { name: "Supervised & Unsupervised Learning", level: 85, category: "ai" },
  { name: "Model Evaluation & Tuning", level: 80, category: "ai" },
  { name: "Scikit-learn", level: 82, category: "ai" },
  { name: "Pandas & NumPy", level: 78, category: "ai" },
  { name: "Matplotlib / Seaborn", level: 70, category: "ai" },
  { name: "TensorFlow / PyTorch (Basic)", level: 65, category: "ai" },

  // Generative AI & LLMs
  { name: "OpenAI APIs (ChatGPT, GPT-4)", level: 92, category: "genai" },
  { name: "LangChain", level: 88, category: "genai" },
  { name: "RAG Pipelines", level: 85, category: "genai" },
  { name: "AI Agents & Tool Usage", level: 87, category: "genai" },
  { name: "Prompt Engineering", level: 90, category: "genai" },
  { name: "Stable Diffusion / Image Gen", level: 80, category: "genai" },
  { name: "Streamlit (AI Dashboarding)", level: 78, category: "genai" },

  // Web Development
  { name: "React.js", level: 90, category: "web" },
  { name: "Next.js", level: 85, category: "web" },
  { name: "Node.js + Express", level: 80, category: "web" },
  { name: "MongoDB", level: 78, category: "web" },
  { name: "Firebase", level: 85, category: "web" },
  { name: "Tailwind CSS", level: 90, category: "web" },

  // Tools & Platforms
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Vercel / Netlify", level: 85, category: "tools" },
  { name: "Google Colab / Jupyter", level: 88, category: "tools" },
  { name: "Figma (UI/UX)", level: 80, category: "tools" },

  // Data & Analytics
  { name: "SPSS / R", level: 75, category: "data" },
  { name: "Excel / Google Sheets", level: 85, category: "data" },
  { name: "Data Cleaning & Visualization", level: 80, category: "data" },
];


const categories = ["all", "ai", "genai", "web", "tools", "data"];


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
