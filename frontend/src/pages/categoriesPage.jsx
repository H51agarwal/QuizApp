import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faChevronRight,
    faGraduationCap,
    faBolt,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { categories, iconMap } from "../data/categories";

/* ─────────────────────────────────────────────────────────
   CARD COLOURS — cycles through for each category
───────────────────────────────────────────────────────── */
const CARD_COLORS = [
    { bg: "from-blue-600 to-cyan-500", ring: "ring-blue-200", badge: "bg-blue-50 text-blue-600" },
    { bg: "from-amber-500 to-orange-500", ring: "ring-amber-200", badge: "bg-amber-50 text-amber-600" },
    { bg: "from-violet-600 to-purple-500", ring: "ring-violet-200", badge: "bg-violet-50 text-violet-600" },
    { bg: "from-rose-500 to-pink-500", ring: "ring-rose-200", badge: "bg-rose-50 text-rose-600" },
    { bg: "from-emerald-500 to-teal-500", ring: "ring-emerald-200", badge: "bg-emerald-50 text-emerald-600" },
    { bg: "from-sky-500 to-blue-500", ring: "ring-sky-200", badge: "bg-sky-50 text-sky-600" },
    { bg: "from-indigo-600 to-blue-500", ring: "ring-indigo-200", badge: "bg-indigo-50 text-indigo-600" },
    { bg: "from-fuchsia-500 to-pink-500", ring: "ring-fuchsia-200", badge: "bg-fuchsia-50 text-fuchsia-600" },
];

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
export default function CategoriesPage() {
    const [query, setQuery] = useState("");

    const filtered = useMemo(
        () =>
            categories.filter((c) =>
                c.title.toLowerCase().includes(query.toLowerCase())
            ),
        [query]
    );

    return (
        <div className="min-h-screen flex flex-col bg-[#f8f9ff]">
            <Header />

            {/* ── HERO BANNER ── */}
            <section className="relative overflow-hidden pt-16">
                {/* Background blobs */}
                <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-linear-to-br from-[#dde1ff]/60 to-[#f0dbff]/40 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-linear-to-br from-[#acedff]/50 to-[#dde1ff]/30 blur-3xl pointer-events-none" />

                <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
                    {/* Pill */}
                    <span
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e5eeff] text-[#0040df] text-xs font-bold uppercase tracking-widest mb-6"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                        <FontAwesomeIcon icon={faBolt} />
                        {categories.length} Categories Available
                    </span>

                    <h1
                        className="text-5xl lg:text-6xl font-extrabold text-[#0b1c30] leading-tight mb-5"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                        Explore{" "}
                        <span className="bg-linear-to-r from-[#0040df] to-[#9e41f5] bg-clip-text text-transparent">
                            Knowledge
                        </span>
                    </h1>

                    <p
                        className="text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                        The world is waiting. Choose your arena and prove your mastery
                        across{" "}
                        <span className="font-bold text-[#0b1c30]">
                            {categories.length} diverse categories
                        </span>
                        .
                    </p>

                    {/* Search bar */}
                    <div className="relative max-w-lg mx-auto">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Search categories…"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full pl-11 pr-5 py-3.5 rounded-2xl border border-[#dde1ff] bg-white shadow-sm text-sm text-[#0b1c30] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0040df]/30 focus:border-[#b8c3ff] transition"
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                        />
                    </div>
                </div>
            </section>

            {/* ── CATEGORIES GRID ── */}
            <main className="flex-1 max-w-7xl mx-auto px-6 pb-24 w-full">
                {/* Results count */}
                <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                    <p
                        className="text-sm text-slate-500"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                        Showing{" "}
                        <span className="font-bold text-[#0b1c30]">{filtered.length}</span>{" "}
                        {filtered.length === 1 ? "category" : "categories"}
                        {query && (
                            <span>
                                {" "}
                                for{" "}
                                <span className="font-bold text-[#0040df]">"{query}"</span>
                            </span>
                        )}
                    </p>
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="text-xs text-slate-400 hover:text-[#0040df] underline transition-colors"
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                            Clear search
                        </button>
                    )}
                </div>

                {filtered.length === 0 ? (
                    /* Empty state */
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#e5eeff] flex items-center justify-center text-2xl text-[#0040df] mb-4">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <h3
                            className="text-xl font-bold text-[#0b1c30] mb-2"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                            No categories found
                        </h3>
                        <p
                            className="text-slate-400 text-sm"
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                            Try a different search term.
                        </p>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filtered.map((cat, index) => {
                            const palette = CARD_COLORS[index % CARD_COLORS.length];
                            return (
                                <Link
                                    key={cat.slug}
                                    to={`/quiz/${cat.slug}`}
                                    className="group bg-white rounded-2xl p-6 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-300 border border-transparent hover:border-[#dde1ff] flex flex-col gap-4"
                                >
                                    {/* Icon */}
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${palette.bg} flex items-center justify-center text-white text-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <FontAwesomeIcon icon={iconMap[cat.tag]} />
                                    </div>

                                    {/* Title + desc */}
                                    <div className="flex-1">
                                        <h3
                                            className="text-base font-bold text-[#0b1c30] mb-1 leading-snug"
                                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                        >
                                            {cat.title}
                                        </h3>
                                        <p
                                            className="text-xs text-slate-500 leading-relaxed"
                                            style={{ fontFamily: "'Manrope', sans-serif" }}
                                        >
                                            {cat.desc}
                                        </p>
                                    </div>

                                    {/* CTA */}
                                    <span
                                        className="text-sm font-bold text-[#0040df] flex items-center gap-1 group-hover:gap-2 transition-all"
                                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                    >
                                        Start Quiz{" "}
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            className="text-xs"
                                        />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}