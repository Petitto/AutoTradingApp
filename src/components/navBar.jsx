export default function Navbar() {
    return (
      <header className="sticky top-0 bg-white shadow z-50 w-full">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center flex-wrap">
        <div className="space-x-4 text-sm sm:text-base">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>
    </header>
    );
  }