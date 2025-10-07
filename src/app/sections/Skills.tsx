import { Code2, Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Skills() {
  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      items: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Redux / Context API",
        "REST APIs",
        "Git & GitHub",
      ],
    },
    styling: {
      title: "Styling & UI",
      icon: <Palette className="w-6 h-6" />,
      items: [
        "Tailwind CSS",
        // "CSS Modules",
        // "Sass/SCSS",
        "Styled Components",
        "Responsive Design",
        // "CSS Animations",
        "Figma",
        // "Material-UI",
        "Shadcn/ui",
        "Framer Motion",
      ],
    },
    soft: {
      title: "Soft Skills",
      icon: <Sparkles className="w-6 h-6" />,
      items: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Time Management",
        "Attention to Detail",
        "Adaptability",
        "Critical Thinking",
        "Self-Learning",
        "Project Management",
      ],
    },
  };
  return (
    <section className="md:pt-[168px] pt-[100px] md:pb-[268px] px-5 md:px-10 pb-[100px]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-6"
        >
          <h2 className="sm:text-[64px] text-3xl font-bold text-accent-foreground mb-6">
            My <span className="text-primary">skills</span>
          </h2>
          <p className="text-accent text-lg ">
            A comprehensive toolkit for building modern, responsive, and
            user-friendly web applications
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4 + index / 6,
              }}
              viewport={{ once: true, amount: 0.5 }}
              key={key}
              className="bg-[#393E46]/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-200 hover:shadow-2xl "
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary rounded-lg text-secondary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-accent-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-slate-300 group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                    <span className="group-hover:text-white text-accent group-hover:translate-x-1 transition-all duration-200">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
