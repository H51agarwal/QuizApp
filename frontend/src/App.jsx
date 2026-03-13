import Home from "./pages/categoriesPage";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/categories" element={<Home />} />
            <Route path="/quiz/:slug" element={<Quiz />} />
        </Routes>
    );
}

export default App;