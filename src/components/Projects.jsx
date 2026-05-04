import clarkstores from "../assets/clarkstores.pdf";
import kerla from "../assets/kerala pothys.pdf";
import shield from "../assets/shieldhealthcare.pdf";
import p6 from "../assets/p6.pdf";
import img1 from "../assets/p1.jpeg";
import img2 from "../assets/p2.jpeg";
import img3 from "../assets/p3.jpeg";
import img4 from "../assets/p4.jpeg";

// ✅ FULL DATA (tech included properly)
const projects = [
  {
    title: "Pothys Kerala E-Commerce Website Testing",
    desc: "Performed real-time end-to-end testing on the Pothys Kerala e-commerce platform by validating product listing pages, cart flow, checkout process, filters, navigation, UI responsiveness, and user interactions. Identified critical UI defects, alignment issues, broken navigation behavior, hover inconsistencies, overlapping elements, and usability problems across desktop and mobile views. Executed functional and regression testing with detailed bug reporting and visual documentation.",
    tech: ["Manual Testing","UI Testing","Functional Testing","Regression Testing","Chrome DevTools","Bug Reporting (Excel)"],
    pdf: kerla,
    img: img1,
  },
  {
    title: "CRTD Web Application Testing",
    desc: "Tested the CRTD website for UI consistency, navigation flow, responsiveness, and functional behavior. Identified layout defects, interaction issues, and usability problems with detailed bug documentation.",
    tech: ["Manual Testing", "UI Testing", "Chrome DevTools", "Bug Reporting"],
    pdf: p6,
    img: img2,
  },
  {
    title: "Shield Healthcare Website Testing",
    desc: "Performed real-time end-to-end testing on the Shield Healthcare website by validating UI elements, navigation, responsiveness, and functional behavior. Identified layout defects, interaction issues, and usability problems with detailed bug documentation.",
    tech: ["Manual Testing", "UI Testing", "Chrome DevTools", "Bug Reporting"],
    pdf: shield,
    img: img3,
  },
  {
    title: "Clarks UAE E-Commerce Website Testing",
    desc: "Performed real-time end-to-end testing on the Clarks UAE e-commerce platform by validating product listing pages, cart flow, checkout process, filters, navigation, UI responsiveness, and user interactions. Identified critical UI defects, alignment issues, broken navigation behavior, hover inconsistencies, overlapping elements, and usability problems across desktop and mobile views. Executed functional and regression testing with detailed bug reporting and visual documentation.",
    tech: ["Manual Testing", "UI Testing", "Chrome DevTools", "Bug Reporting"],
    pdf: clarkstores,
    img: img4,
  },
];
export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#FFF7ED]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            My Projects
          </h2>
          <p className="text-slate-600 mt-3">
            Click any project to view detailed case study
          </p>
        </div>

        {/* GRID → 1 mobile | 2 desktop */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">

          {projects.map((p, i) => (
            <a
              key={i}
              href={p.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden 
                         shadow-md hover:shadow-2xl 
                         transition-all duration-500 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover 
                             group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/20 
                                opacity-0 group-hover:opacity-100 
                                transition flex items-center justify-center">
                  <span className="bg-white text-sm px-4 py-2 rounded-full font-medium shadow">
                    View Case Study
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-500 transition">
                  {p.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {p.desc.length > 220
                    ? p.desc.slice(0, 220) + "..."
                    : p.desc}
                </p>

                {/* TECH STACK */}
                <div className="mt-5">
                  <div className="flex flex-wrap gap-2">
                    {p.tech && p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-orange-100 text-orange-600 
                                   rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}