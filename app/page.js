import Link from "next/link";

const projects = [
  {
    title: "EduRAG - Question Generator",
    tech: "Python, LangChain, ChromaDB, Tesseract OCR, Google Vision",
    description:
      "A project that reads syllabus PDFs and generates question papers based on different difficulty levels. I used Tesseract and Regex to clean the text and Google Vision to read and grade handwritten student answers.",
    link: "https://github.com/theshrish46/edu-rag", 
  },
  {
    title: "LegalRAG - Document Chat",
    tech: "LangChain, Qdrant, FlashRank, DeepEval, Docker",
    description:
      "A RAG-based app to chat with legal files. I used Qdrant for the vector database and FlashRank for better search results. I also used DeepEval to test the accuracy and compared the results with ChatGPT.",
    link: "https://github.com/theshrish46/legal-rag",
  },
];

export default function Home() {
  return (
    <div className="flex justify-center font-sans p-6">
      <div className="w-full max-w-2xl">
        {/* HEADER - Simple & Honest */}
        <header className="mb-12 border-b border-black pb-8">
          <h1 className="text-3xl font-bold tracking-tight uppercase">Shrish Kerur</h1>
          <p className="font-mono text-xs mt-2 text-gray-600 uppercase tracking-widest">
            AI ENGINEER | DATA & STATISTICS | LLM IMPLEMENTATIONS
          </p>
        </header>

        {/* ABOUT - Straightforward builder intro */}
        {/* ABOUT - Grounded, tool-focused, and honest */}
        <section id="about" className="mb-12">
          <h2 className="font-bold text-lg mb-4 uppercase tracking-wider border-b border-gray-200 inline-block">
            Introduction
          </h2>
          <p className="leading-relaxed text-gray-800">
            I am a developer who focuses on building functional AI applications. 
            I started my journey in full-stack web development (MERN), but have since pivoted 
            to Machine Learning and the LLM ecosystem. I rely on a solid theoretical 
            understanding of <span className="font-semibold">Statistics</span> to help me build and 
            evaluate RAG pipelines. I enjoy the process of using tools like LangChain, 
            Vector Databases, and OCR to turn unstructured data into something useful.
          </p>
        </section>

        {/* SKILLS - Just a list of what you can actually use */}
        <section id="skills" className="mb-12">
          <h2 className="font-bold text-lg mb-4 uppercase tracking-wider border-b border-gray-200 inline-block">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 font-mono text-sm">
            <div>
              <p className="font-bold text-gray-400 mb-1 underline text-[10px]">Frameworks & AI</p>
              <ul className="space-y-1">
                <li>‣ LangChain & LangGraph</li>
                <li>‣ Scikit-learn, Keras, PyTorch</li>
                <li>‣ Vector DBs (Qdrant, Chroma)</li>
                <li>‣ DeepEval (Testing)</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-400 mb-1 underline text-[10px]">Core Tech</p>
              <ul className="space-y-1">
                <li>‣ Python (NumPy, Pandas, Matplotlib)</li>
                <li>‣ SQL (Basic to Intermediate)</li>
                <li>‣ Git / GitHub / Docker</li>
                <li>‣ OCR (Tesseract / Google Vision)</li>
              </ul>
            </div>
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
                  <Link href={project.link} target="_blank" className="text-xs font-mono underline">[VIEW CODE]</Link>
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
          <p className="text-[10px] font-mono text-gray-400 mt-6 italic">
            Currently: Learning how to fine-tune models and use LangGraph.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-black flex justify-between font-mono text-sm">
          <div className="flex gap-4">
            <Link href="mailto:theshrish46@gmail.com" className="hover:underline">Email</Link>
            <Link href="https://github.com/theshrish46" className="hover:underline">GitHub</Link>
            <Link href="https://linkedin.com/in/shrish-kerur" className="hover:underline">LinkedIn</Link>
          </div>
          <p className="text-gray-400">© 2024</p>
        </footer>
      </div>
    </div>
  );
}