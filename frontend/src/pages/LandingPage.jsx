import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faTrophy,
  faFire,
  faStar,
  faPlay,
  faPencil,
  faLink,
  faChevronRight,
  faCircleCheck,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { categories, iconMap } from "../data/categories";


const CARD_COLORS = [
  "from-blue-600 to-cyan-500",
  "from-amber-500 to-orange-500",
  "from-violet-600 to-purple-500",
  "from-rose-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-sky-500 to-blue-500",
];

const CATEGORIES = categories.slice(0, 6);

const TRENDING = [
  {
    title: "The Ultimate Space Odyssey",
    tag: "Science",
    difficulty: "Hard",
    plays: "24.5K",
    gradient: "from-blue-700 via-indigo-600 to-violet-600",
    tagColor: "bg-blue-500/30 text-blue-200",
    diffColor: "bg-red-500/30 text-red-200",
  },
  {
    title: "WWII: Every Front, Every Battle",
    tag: "History",
    difficulty: "Medium",
    plays: "18.2K",
    gradient: "from-amber-600 via-orange-600 to-red-600",
    tagColor: "bg-amber-400/30 text-amber-200",
    diffColor: "bg-yellow-500/30 text-yellow-200",
  },
  {
    title: "Viral Tech Trivia 2025",
    tag: "Technology",
    difficulty: "Easy",
    plays: "31.0K",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    tagColor: "bg-emerald-400/30 text-emerald-200",
    diffColor: "bg-green-400/30 text-green-200",
  },
];

const FEATURES = [
  {
    icon: faPencil,
    title: "Intuitive Quiz Builder",
    desc: "Drag and drop questions, add media, and set custom timers — no coding required.",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    icon: faLink,
    title: "Instant Link Sharing",
    desc: "Send unique URLs to classmates, friends, or students in a single click.",
    iconBg: "bg-cyan-100 text-cyan-600",
  },
];



/* ─────────────────────────────────────────────────────────────
    HERO
───────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f8f9ff] pt-16">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-150 h-150 rounded-full bg-linear-to-br from-[#dde1ff]/70 to-[#f0dbff]/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-125 h-125 rounded-full bg-linear-to-br from-[#acedff]/60 to-[#dde1ff]/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          {/* Pill badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5eeff] text-[#0040df] text-xs font-bold mb-6 uppercase tracking-widest"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <FontAwesomeIcon icon={faBolt} />
            The Intellectual Playground
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0b1c30] leading-tight mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Master Any Subject{" "}
            <span className="bg-linear-to-r from-[#0040df] to-[#9e41f5] bg-clip-text text-transparent">
              with Ease.
            </span>
          </h1>

          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed"
            style={{ fontFamily: "'Manrope', sans-serif" }}>
            Ditch the dry textbooks. Experience the dopamine-driven learning platform
            designed for the curious mind.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/"
              className="px-7 py-3.5 rounded-xl font-bold text-white bg-linear-to-r from-[#0040df] to-[#2d5bff] hover:scale-105 transition-transform shadow-lg shadow-blue-400/30 text-base"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Start for Free
            </Link>
            <a href="#categories"
              className="px-7 py-3.5 rounded-xl font-bold text-[#0040df] bg-[#e5eeff] hover:bg-[#dce9ff] hover:scale-105 transition-all text-base"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Explore Categories <FontAwesomeIcon icon={faChevronRight} className="ml-1 text-sm" />
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-6 flex-wrap">
            {[["200K+", "Active Learners"], ["50K+", "Quizzes"], ["4.9★", "Rating"]].map(([val, label]) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-[#0b1c30]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{val}</p>
                <p className="text-xs text-slate-400 font-medium"
                  style={{ fontFamily: "'Manrope', sans-serif" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating cards */}
        <div className="relative flex justify-center items-center h-105 lg:h-125">
          {/* Score card */}
          <div className="absolute top-6 right-0 bg-white rounded-2xl shadow-xl shadow-blue-100 p-5 w-52 border border-[#e5eeff]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#0040df] to-[#2d5bff] flex items-center justify-center text-white text-xs">
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <span className="text-sm font-bold text-[#0b1c30]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Your Score
              </span>
            </div>
            <p className="text-4xl font-extrabold text-[#0040df]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>8,420</p>
            <p className="text-xs text-slate-400 mt-1" style={{ fontFamily: "'Manrope', sans-serif" }}>Top 3% globally 🚀</p>
          </div>

          {/* Streak card */}
          <div className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-xl shadow-purple-100 p-5 w-52 border border-[#f0dbff]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#831ada] to-[#9e41f5] flex items-center justify-center text-white text-xs">
                <FontAwesomeIcon icon={faFire} />
              </div>
              <span className="text-sm font-bold text-[#0b1c30]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Daily Streak
              </span>
            </div>
            <p className="text-4xl font-extrabold text-[#831ada]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>🔥 14</p>
            <p className="text-xs text-slate-400 mt-1" style={{ fontFamily: "'Manrope', sans-serif" }}>Days in a row — amazing!</p>
          </div>

          {/* Center main card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100 p-8 w-72 border border-[#e5eeff] z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#0040df] uppercase tracking-widest"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Science Quiz</span>
              <span className="text-xs bg-[#e5eeff] text-[#0040df] px-2 py-1 rounded-full font-bold">Q 3/10</span>
            </div>
            <p className="text-base font-bold text-[#0b1c30] mb-5 leading-snug"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              What is the speed of light in a vacuum?
            </p>
            {[["299,792 km/s", true], ["150,000 km/s", false], ["3,000 km/s", false]].map(([opt, correct]) => (
              <div key={opt}
                className={`flex items-center gap-3 p-3 rounded-xl mb-2 text-sm font-medium cursor-pointer transition-all
                  ${correct
                    ? "bg-linear-to-r from-[#e5eeff] to-[#dde1ff] text-[#0040df] border border-[#b8c3ff]"
                    : "bg-[#f8f9ff] text-slate-500 hover:bg-[#e5eeff]"}`}
                style={{ fontFamily: "'Manrope', sans-serif" }}>
                {correct && <FontAwesomeIcon icon={faCircleCheck} className="text-[#0040df] shrink-0" />}
                {opt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CATEGORIES
───────────────────────────────────────────────────────────── */
function Categories() {
  return (
    <section id="categories" className="bg-[#eff4ff] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold text-[#0040df] uppercase tracking-widest mb-3"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          ✦ Explore
        </p>
        <h2 className="text-4xl font-extrabold text-[#0b1c30] mb-3"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Explore Categories
        </h2>
        <p className="text-slate-500 mb-12 max-w-xl"
          style={{ fontFamily: "'Manrope', sans-serif" }}>
          Curated knowledge across every domain — pick what sparks your curiosity.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, index) => (
            <Link key={cat.slug} to={`/quiz/${cat.slug}`}
              className="group bg-white rounded-2xl p-6 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 border border-transparent hover:border-[#dde1ff]">
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${CARD_COLORS[index]} flex items-center justify-center text-white text-lg mb-4 group-hover:scale-110 transition-transform`}>
                <FontAwesomeIcon icon={iconMap[cat.tag]} />
              </div>
              <h3 className="text-lg font-bold text-[#0b1c30] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {cat.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4"
                style={{ fontFamily: "'Manrope', sans-serif" }}>
                {cat.desc}
              </p>
              <span className="text-[#0040df] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Play <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/categories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#0040df] bg-white border border-[#b8c3ff] hover:bg-[#e5eeff] hover:scale-105 transition-all shadow-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            View All Categories <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CREATE YOUR LEGACY
───────────────────────────────────────────────────────────── */
function CreateLegacy() {
  return (
    <section className="bg-[#f8f9ff] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left visual */}
        <div className="relative">
          <div className="bg-linear-to-br from-[#0040df] to-[#9e41f5] rounded-3xl p-8 text-white shadow-2xl shadow-indigo-300/30">
            <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Quiz Builder
            </p>
            <h3 className="text-3xl font-extrabold mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Build your first quiz in under 5 minutes.
            </h3>
            {/* Mock builder UI */}
            <div className="space-y-3">
              {["What is photosynthesis?", "Name 3 Newton's laws.", "What year did WWII end?"].map((q, i) => (
                <div key={i} className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium" style={{ fontFamily: "'Manrope', sans-serif" }}>{q}</p>
                </div>
              ))}
              <div className="bg-white/10 border-2 border-dashed border-white/30 rounded-xl px-4 py-3 text-sm text-white/60 text-center"
                style={{ fontFamily: "'Manrope', sans-serif" }}>
                + Add question
              </div>
            </div>
          </div>

          {/* Floating share badge */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-[#e5eeff]">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#005e6e] to-[#00788c] flex items-center justify-center text-white">
              <FontAwesomeIcon icon={faLink} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0b1c30]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Share Link</p>
              <p className="text-xs text-slate-400" style={{ fontFamily: "'Manrope', sans-serif" }}>quizmaster.io/q/xyz42</p>
            </div>
          </div>
        </div>

        {/* Right copy */}
        <div>
          <p className="text-xs font-bold text-[#831ada] uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            ✦ Create
          </p>
          <h2 className="text-4xl font-extrabold text-[#0b1c30] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Create your own{" "}
            <span className="bg-linear-to-r from-[#831ada] to-[#9e41f5] bg-clip-text text-transparent">
              Legacy.
            </span>
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed"
            style={{ fontFamily: "'Manrope', sans-serif" }}>
            Whether you're a teacher, student, or trivia enthusiast — our platform
            empowers you to create and share rich quiz experiences effortlessly.
          </p>

          <div className="space-y-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-5 items-start">
                <div className={`w-12 h-12 rounded-2xl ${f.iconBg} flex items-center justify-center text-lg shrink-0`}>
                  <FontAwesomeIcon icon={f.icon} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0b1c30] mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {f.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed"
                    style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a href="#"
            className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-linear-to-r from-[#831ada] to-[#9e41f5] hover:scale-105 transition-transform shadow-lg shadow-purple-300/40"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Start Creating <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   TRENDING NOW
───────────────────────────────────────────────────────────── */
function TrendingNow() {
  return (
    <section className="bg-[#eff4ff] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs font-bold text-[#005e6e] uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              ✦ Trending
            </p>
            <h2 className="text-4xl font-extrabold text-[#0b1c30]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Trending Now
            </h2>
            <p className="text-slate-500 mt-2" style={{ fontFamily: "'Manrope', sans-serif" }}>
              The quizzes everyone is talking about today.
            </p>
          </div>
          <a href="#" className="text-sm font-bold text-[#0040df] flex items-center gap-1 hover:gap-2 transition-all"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            See all <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TRENDING.map((quiz) => (
            <div key={quiz.title}
              className="bg-white rounded-3xl overflow-hidden hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 group">
              {/* Card header gradient */}
              <div className={`bg-linear-to-br ${quiz.gradient} p-6 relative`}>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${quiz.tagColor}`}>
                    {quiz.tag}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${quiz.diffColor}`}>
                    {quiz.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white leading-snug"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {quiz.title}
                </h3>
                {/* Play button */}
                <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors group-hover:scale-110 duration-300">
                  <FontAwesomeIcon icon={faPlay} className="text-sm ml-0.5" />
                </button>
              </div>

              {/* Card footer */}
              <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-400 text-sm"
                  style={{ fontFamily: "'Manrope', sans-serif" }}>
                  <FontAwesomeIcon icon={faPlay} className="text-xs" />
                  <span>{quiz.plays} plays</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-sm">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   DAILY CHALLENGE
───────────────────────────────────────────────────────────── */
function DailyChallenge() {
  return (
    <section className="bg-linear-to-br from-[#0040df] via-[#2d5bff] to-[#9e41f5] py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-widest mb-6"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          <FontAwesomeIcon icon={faBrain} /> Daily Challenge
        </div>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Daily Challenge:{" "}
          <span className="text-[#acedff]">75% Complete</span>
        </h2>
        <p className="text-white/80 text-lg mb-10"
          style={{ fontFamily: "'Manrope', sans-serif" }}>
          Answer 5 more questions to reach your daily streak goal! 🔥
        </p>

        {/* Progress bar */}
        <div className="bg-white/20 rounded-full h-5 mb-3 overflow-hidden max-w-lg mx-auto">
          <div
            className="h-full rounded-full bg-linear-to-r from-[#acedff] to-white transition-all duration-1000"
            style={{ width: "75%" }}
          />
        </div>
        <p className="text-white/70 text-sm mb-10"
          style={{ fontFamily: "'Manrope', sans-serif" }}>
          15 / 20 questions answered today
        </p>

        <Link to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-[#0040df] bg-white hover:scale-105 transition-transform shadow-2xl shadow-black/20 text-lg"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Continue Challenge <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </section>
  );
}



/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <CreateLegacy />
      <TrendingNow />
      <DailyChallenge />
      <Footer />
    </div>
  );
}
