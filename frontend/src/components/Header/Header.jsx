import categories from "../../data/categories";

const Header = () => {
  return (
    <>
      <header className="navbar">
        <div className="nav-right">
          <a href="/leaderboard">Leaderboard</a>
          <a href="/about">About Us</a>
          <button className="login-btn">Login / SignUp</button>
        </div>
      </header>
      <section className="hero">
        <h1>Test Your Knowledge</h1>
        <p className="subtitle">
          Free Online Quizzes lets you play fun quizzes in various categories
          <br />
          Whether you are studying or just having fun, there is something for
          everyone
        </p>
        <h2>Enter your own category</h2>
        <input
          type="text"
          className="category-input"
          list="category-options"
        />
        <datalist id="category-options" size={5} >
          {categories.map((category, index) => (
            <option key={index} value={category.title} />
          ))}
        </datalist>
        <p className="or-text">or</p>
        <h3>Create a category</h3>
      </section>
    </>
  );
};

export default Header;