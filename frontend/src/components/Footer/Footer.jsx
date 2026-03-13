import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const COLS = [
  {
    title: "Platform",
    links: ["Categories", "Create Quiz", "Global Leaderboard", "QuizMaster Pro"],
  },
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Careers", "Help Center"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0b1c30] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p
              className="text-xl font-extrabold flex items-center gap-2 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <FontAwesomeIcon icon={faBolt} className="text-[#9e41f5]" />
              QuizMaster
            </p>
            <p
              className="text-slate-400 text-sm leading-relaxed"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Redefining digital learning through interactive, engaging, and
              beautifully designed quiz experiences.
            </p>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <h4
                className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-slate-500"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            © 2025 QuizMaster Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "Discord"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-slate-500 hover:text-white transition-colors"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;