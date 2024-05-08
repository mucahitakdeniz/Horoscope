import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
