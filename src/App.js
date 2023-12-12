import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Intro from "./components/Portfolio/Intro";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Nav />
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/project" />} />
            <Route path="/project" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Intro />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
