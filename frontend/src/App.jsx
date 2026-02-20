import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:slug" element={<Quiz />} /> 
        </Routes>
    );
}

export default App;