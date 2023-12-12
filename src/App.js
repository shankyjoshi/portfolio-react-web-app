import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Intro from "./components/Portfolio/Intro";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import SignUp from "./components/Portfolio/SignUp";
import store from "./components/store";
import { Provider } from "react-redux";
import Signinside from "./components/SignInSide";

function App() {
  return (
    <div>
      <Nav />
      <HashRouter>
        <Provider store={store}>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/project" element={<Intro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<Signinside />} />
            </Routes>
          </div>
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
