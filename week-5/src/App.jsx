import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">🏠 Home</Link> | 
        <Link to="/about">ℹ️ About</Link> | 
        <Link to="/contact">📞 Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;