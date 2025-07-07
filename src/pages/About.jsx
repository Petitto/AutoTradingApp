export default function About() {
    return (
      <section className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Gerardo 👋</h1>
      <p className="text-xl max-w-xl">I build fast, responsive websites with React, Tailwind, and modern tools.</p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">View Projects</a>
        <a href="#contact" className="border border-white px-6 py-2 rounded-lg">Contact Me</a>
      </div>
    </section>
    );
  }
  