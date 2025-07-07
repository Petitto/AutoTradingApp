export default function Projects() {
    return (
      <section id="projects" className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Project {n}</h3>
              <p className="text-gray-600">Description of project {n} goes here.</p>
            </div>
          ))}
        </div>
      </section>
    );
  }