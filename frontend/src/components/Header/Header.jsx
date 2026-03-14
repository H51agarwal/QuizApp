import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const NAV_LINKS = [{"Categories":'/categories'}, {"Create Quiz":'/create-quiz'}, {"Leaderboard":'/leaderboard'}, {"About":'/about'}];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-xl text-[#0040df]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <FontAwesomeIcon icon={faBolt} className="text-[#9e41f5]" />
          QuizMaster
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => {
            const [label, path] = Object.entries(item)[0];
            return (
              <li key={label}>
                <Link
                  to={path}
                  className="text-sm font-medium text-slate-600 hover:text-[#0040df] transition-colors"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-semibold text-slate-600 hover:text-[#0040df] transition-colors"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Log In
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-lg text-sm font-bold text-white bg-linear-to-r from-[#0040df] to-[#2d5bff] hover:scale-105 transition-transform shadow-md shadow-blue-300/40"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Sign Up Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-700 text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-slate-100">
          {NAV_LINKS.map((item) => {
            const [label, path] = Object.entries(item)[0];
            return (
              <Link
                key={label}
                to={path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-[#0040df]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="#"
            className="mt-2 px-4 py-2 rounded-lg text-sm font-bold text-white text-center bg-linear-to-r from-[#0040df] to-[#2d5bff]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Sign Up Free
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;