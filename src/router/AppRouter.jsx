import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Daily from '../pages/Daily'
import Article from '../pages/Article'
import Contact from '../pages/Contact'
import Tarot from '../pages/Tarot'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="daily" element={<Daily />} />
        <Route path="article" element={<Article />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tarot" element={<Tarot />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
