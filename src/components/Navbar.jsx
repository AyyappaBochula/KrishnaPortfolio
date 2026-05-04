import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // detect scroll blur navbar
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  return (

    <section id="navbar">

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 py-5
        ${scrolled
            ? "bg-white/70 backdrop-blur-lg shadow-md"
            : "bg-transparent"
          }`}
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center justify-between">

            {/* LOGO */}

            <a href="#" className="flex items-center gap-2 group">

              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">

                {"</>"}

              </div>

              <span className="font-display font-bold text-xl tracking-tight text-slate-900">

                Kali Krishna

              </span>

            </a>


            {/* DESKTOP MENU */}

            <div className="hidden md:flex items-center gap-8">

              <div className="flex items-center gap-6">

                <a href="#about" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#contact" className="nav-link">Contact</a>

              </div>

              <a
                href="https://www.linkedin.com/in/kali-krishna027/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-primary text-white hover:bg-blue-700 transition"
              >
                Let's Connect
              </a>

            </div>


            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary text-slate-700"
            >

              {menuOpen ? "✕" : "☰"}

            </button>

          </div>

        </div>


        {/* MOBILE DROPDOWN MENU */}

        {menuOpen && (

          <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg border-t">

            <div className="flex flex-col px-6 py-4 gap-4">

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                Projects
              </a>

              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                Experience
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                Contact
              </a>

              <a
                href="https://www.linkedin.com/in/kali-krishna027/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-2 rounded-full bg-primary text-white text-center"
              >
                Let's Connect
              </a>

            </div>

          </div>

        )}

      </nav>

    </section>

  );

}