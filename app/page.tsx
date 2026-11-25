
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">

      <p className="mb-4 font-medium text-blue-600">
        BS Information Technology Student
      </p>

      <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
        Hello, my name is Vincent Ace Racoma.
      </h1>

      <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-600">
        I am an Information Technology student at
        Mater Dei College, interested in web development,
        programming, and building useful digital solutions.
        I enjoy learning new technologies and improving
        my skills through hands-on projects.
      </p>

      <Link
        href="/projects"
        className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        See My Projects
      </Link>

    </main>
  );
}
