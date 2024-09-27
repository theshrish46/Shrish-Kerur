import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Project One",
    description: "A backend system for an e-commerce platform.",
  },
  {
    title: "Project One",
    description: "A backend system for an e-commerce platform.",
  },
  {
    title: "Project One",
    description: "A backend system for an e-commerce platform.",
  },
  {
    title: "Project One",
    description: "A backend system for an e-commerce platform.",
  },
  {
    title: "Project One",
    description: "A backend system for an e-commerce platform.",
  },
  {
    title: "Project One",
    description: "A backend system for an e-commerce platform.",
  },
];

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="min-h-screen max-w-screen-md">
        <section className="text-center my-4">
          <h1 className="text-lg md:text-2xl">Shrish Kerur</h1>
          <p>Backend Developer | Freelancer | Software Developer</p>
        </section>

        <section id="about" className="my-4 text-center mx-1">
          <h2 className="font-semibold md:text-2xl md:font-medium">About</h2>
          <p>
            I&apos;m a backend developer specializing in building scalable
            server-side applications. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid possimus architecto fugit omnis recusandae
            neque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ad aspernatur explicabo, pariatur debitis aliquam illum
            esse, iusto corporis doloribus similique in repellendus numquam
            possimus nemo quam aperiam! Ab, pariatur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corrupti perspiciatis aperiam
            voluptatibus dignissimos! Ea placeat, sapiente qui doloribus cumque
            fugiat commodi quos aliquid provident suscipit accusantium deleniti
            repellat fugit beatae.
          </p>
        </section>

        <section id="projects" className="my-4 text-center">
          <h2 className="md:text-2xl font-semibold md:font-medium">Projects</h2>
          <ul className="flex flex-wrap gap-3 justify-center items-center">
            {projects.map((project, index) => (
              <li
                className="my-2 mx-2 md:mx-1  border-2 border-gray-500 p-2"
                key={index}
              >
                <h2 className="text-sm md:text-base">{project.title}</h2>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="my-4 text-center">
          <h2 className="md:text-2xl font-semibold md:font-medium">Contact</h2>
          <p>
            Email:{" "}
            <Link href={"#"} className="underline text-blue-700">
              theshrih46@gmail.com
            </Link>
          </p>
          <p>
            GitHub:{" "}
            <Link href={"#"} className="underline text-blue-700">
              theshrish46
            </Link>
          </p>
        </section>
        <footer className="text-center p-2 mt-4">
          <p>&copy; 2024 Shrish Kerur</p>
        </footer>
      </div>
    </div>
  );
}
