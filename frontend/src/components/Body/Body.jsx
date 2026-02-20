import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faClapperboard,
  faBrain,
  faTv,
  faClock,
  faBook,
  faBurger,
  faPalette,
  faScaleBalanced,
  faHeartPulse,
  faStar,
  faLaptop,
  faPaw,
  faCalculator,
  faMusic,
  faGlobe,
  faCar,
  faFootball,
  faAtom,
  faFilm,
  faGamepad,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import categories from "../../data/categories";

const iconMap = {
  clapperboard: faClapperboard,
  brain: faBrain,
  tv: faTv,
  clock: faClock,
  book: faBook,
  burger: faBurger,
  palette: faPalette,
  scale: faScaleBalanced,
  heart: faHeartPulse,
  star: faStar,
  laptop: faLaptop,
  paw: faPaw,
  calculator: faCalculator,
  music: faMusic,
  globe: faGlobe,
  car: faCar,
  football: faFootball,
  atom: faAtom,
  film: faFilm,
  gamepad: faGamepad,
  bookOpen: faBookOpen,
};

const Body = () => {
  return (
    <section className="body-container">
      <div className="card-grid">
        {categories.map((item, index) => (
          <div className="quiz-card" key={index}>
            <div className="card-icon flex items-center justify-center text-2xl mb-3">
              <FontAwesomeIcon icon={iconMap[item.tag]} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <Link to={`/quiz/${item.slug}`} className="start-btn">
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Body;
