import Link from "next/link";

const projects = [
  {
    title: "Synthetix — Autonomous Git Agent",
    tech: "Python · LangGraph · Groq · PyGithub",
    description:
      "An agentic AI built with LangGraph that accepts a GitHub repository URL and autonomously refactors all programming files. Uses a state machine with two Groq-powered LLMs — one for refactoring and one for review — with a self-correction loop that re-refactors any file scoring below 0.5. Once all files are processed, it raises a pull request to the main branch.",
    link: "https://github.com/theshrish46/synthetix",
  },
  {
    title: "LegalRAG — Document Audit Tool",
    tech: "Python · LangChain · Chroma · FlashRank · DeepEval · Docker",
    description:
      "A RAG application for analysing legal documents using Qdrant for vector storage and FlashRank for re-ranking retrieved chunks. Evaluated using DeepEval across four RAG metrics — all scoring above 0.8.",
    link: "https://github.com/theshrish46/legal-rag",
  },
  {
    title: "EduRAG — Assessment Generator",
    tech: "Python · LangChain · ChromaDB · Google Vision · Tesseract · Gemini",
    description:
      "A tool that processes syllabus PDFs to extract modules, course outcomes, and Bloom's Taxonomy levels. Generates question papers based on user-specified format and difficulty. Students can upload a photo of handwritten answers and receive LLM-powered feedback via Google Vision and Gemini.",
    link: "https://github.com/theshrish46/edurag",
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Bangalore Institute Of Technology",
    year: "2024 — Present",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Basaveshwara Science College",
    year: "2021 — 2024",
  },
];

export default function Home() {
  return (
    <div className="flex justify-center font-sans p-6">
      <div className="w-full max-w-2xl">
        {/* HEADER */}
        <header className="mb-12 border-b border-black pb-8">
          <h1 className="text-3xl font-bold tracking-tight uppercase">
            Shrish Kerur
          </h1>
          <p className="font-mono text-xs mt-2 text-gray-600 uppercase tracking-widest">
            AI Developer &nbsp;|&nbsp; Generative AI & Agentic Systems
            &nbsp;|&nbsp; Python
          </p>
        </header>

        {/* ABOUT */}
        <section id="about" className="mb-12">
          <h2 className="font-bold text-lg mb-4 uppercase tracking-wider border-b border-gray-200 inline-block">
            Introduction
          </h2>
          <p className="leading-relaxed text-gray-800">
            I am a developer building AI applications and LLM-based systems. I
            began with full-stack development during my BCA and have since moved
            into Machine Learning and the LangChain ecosystem during my MCA. I
            use statistics and mathematics to build and rigorously evaluate my
            projects. I am currently focused on agentic workflows and model
            fine-tuning.
          </p>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mb-12">
          <h2 className="font-bold text-lg mb-4 uppercase tracking-wider border-b border-gray-200 inline-block">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="flex justify-between items-baseline">
                <div>
                  <p className="font-bold text-sm">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                </div>
                <p className="font-mono text-xs text-gray-600">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mb-12">
          <h2 className="font-bold text-lg mb-4 uppercase tracking-wider border-b border-gray-200 inline-block">
            Skills
          </h2>
          <div className="font-mono text-sm space-y-3">
            <p>
              <span className="text-gray-600 text-[10px] uppercase tracking-wider">
                AI & ML —{" "}
              </span>
              LangChain, LangGraph, RAG, Agentic Workflows, DeepEval, PyTorch,
              Keras, Scikit-learn
            </p>
            <p>
              <span className="text-gray-600 text-[10px] uppercase tracking-wider">
                Data & Math —{" "}
              </span>
              Python, NumPy, Pandas, Statistics, Linear Algebra, Calculus
            </p>
            <p>
              <span className="text-gray-600 text-[10px] uppercase tracking-wider">
                Databases —{" "}
              </span>
              Qdrant, ChromaDB, PostgreSQL, MongoDB
            </p>
            <p>
              <span className="text-gray-600 text-[10px] uppercase tracking-wider">
                Tools —{" "}
              </span>
              Git, Docker, Linux, Groq, HuggingFace
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-12">
          <h2 className="font-bold text-lg mb-6 uppercase tracking-wider border-b border-gray-200 inline-block">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group border border-black p-4 transition-all hover:bg-gray-50 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-xs font-mono underline"
                  >
                    [SOURCE]
                  </Link>
                </div>
                <p className="text-[10px] font-mono mb-3 text-gray-500 uppercase tracking-tighter">
                  {project.tech}
                </p>
                <p className="text-sm text-gray-800 leading-normal">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-black flex justify-between font-mono text-sm">
          <div className="flex gap-4">
            <Link
              href="mailto:theshrish46@gmail.com"
              className="hover:underline"
            >
              Email
            </Link>
            <Link
              href="https://github.com/theshrish46"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/shrish-kerur"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </Link>
          </div>
          <p className="text-gray-400">© 2026</p>
        </footer>
      </div>
    </div>
  );
}
