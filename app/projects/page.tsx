
export const metadata = {
  title: "Projects | Vincent Ace Racoma",
};

const projects = [
  {
    id: 1,
    name: "Side Hustle Profit Coach",
    description:
      "An educational website that helps users understand their business revenue, expenses, and profit.",
  },
  {
    id: 2,
    name: "Bohol Tours",
    description:
      "A tourism website showcasing destinations and attractions around Bohol.",
  },
  {
    id: 3,
    name: "BarangayLink",
    description:
      "A mobile application prototype for online barangay service requests and tracking.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">
        My Projects
      </h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-gray-200 p-6"
          >
            <h2 className="mb-3 text-xl font-semibold">
              {project.name}
            </h2>

            <p className="leading-7 text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
