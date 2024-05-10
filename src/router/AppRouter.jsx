import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Daily from '../pages/Daily'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="daily" element={<Daily />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
