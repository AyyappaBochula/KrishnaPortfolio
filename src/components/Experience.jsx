

import klocLogo from "../assets/kloc.jpeg";
import wyreflowLogo from "../assets/wyerflow.jpeg";
import prodigyLogo from "../assets/prodigy.jpeg";
import edunetLogo from "../assets/edunet.jpeg";
import anuLogo from "../assets/ANU.jpeg";
import andhraLogo from "../assets/andhra.jpeg";

const experienceData = [
  {
    title: "QA Analyst Intern",
    company: "KLoc Technologies | Shopify Plus Agency",
    location: "Bengaluru",
    duration: "Feb 2026 – Apr 2026",
    desc: "Currently working as a QA Analyst Intern at a Shopify Plus Agency...",
    link: "https://www.linkedin.com/company/kloc-technologies/posts/?feedView=all",
    logo: klocLogo,
    isEducation: false,
  },
  {
    title: "QA Intern",
    company: "Wyreflow Technologies",
    location: "Remote",
    duration: "Sep 2025 – Oct 2025",
    desc: "Assisted in testing web, mobile, and API-based applications...",
    link: "https://www.linkedin.com/company/wyreflow-technologies/posts/?feedView=all",
    logo: wyreflowLogo,
    isEducation: false,
  },
  {
    title: "Software Testing Intern",
    company: "Prodigy InfoTech",
    location: "Remote",
    duration: "Apr 2025 – May 2025",
    desc: "Designed and executed manual and automated test cases...",
    link: "https://www.linkedin.com/company/prodigy-infotech/posts/?feedView=all",
    logo: prodigyLogo,
    isEducation: false,
  },
  {
    title: "AI Intern",
    company: "Edunet Foundation (Microsoft & SAP – TechSaksham)",
    location: "Remote",
    duration: "Feb 2025 – Mar 2025",
    desc: "Completed AI internship under Microsoft & SAP initiative...",
    link: "https://www.linkedin.com/company/edunetfoundation/",
    logo: edunetLogo,
    isEducation: false,
  },
  {
    title: "Master of Computer Applications (MCA)",
    company: "Acharya Nagarjuna University",
    location: "Computer Science",
    duration: "Oct 2023 – Jul 2025",
    desc: "Postgraduate studies in Computer Science...",
    link: "https://www.linkedin.com/school/acharya-nagarjuna-university/posts/?feedView=all",
    logo: anuLogo,
    isEducation: true,
  },
  {
    title: "Bachelor of Arts",
    company: "Andhra University",
    location: "",
    duration: "Dec 2018 – May 2022",
    desc: "Completed undergraduate studies at Andhra University.",
    link: "https://www.linkedin.com/school/andhra-university/",
    logo: andhraLogo,
    isEducation: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            Timeline
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            Experience & Education
          </h3>
          <p className="text-slate-600 text-lg mt-4">
            My professional journey and academic background.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 pl-8 ml-4 md:ml-6">

          {experienceData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative mb-12 last:mb-0 group"
            >

              {/* timeline dot */}
              <div
                className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-10 ${
                  item.isEducation ? "bg-green-500" : "bg-primary"
                }`}
              />

              {/* card */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow flex gap-4">

                {/* logo */}
                <div className="flex-shrink-0">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-12 h-12 rounded-md object-contain bg-white border border-slate-200 p-1"
                  />
                </div>

                {/* content */}
                <div className="flex-1">

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">

                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-700 font-medium">
                        {item.company}
                      </p>
                      {item.location && (
                        <p className="text-sm text-slate-500">
                          {item.location}
                        </p>
                      )}
                    </div>

                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium whitespace-nowrap h-fit">
                      {item.duration}
                    </div>

                  </div>

                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>

                </div>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
