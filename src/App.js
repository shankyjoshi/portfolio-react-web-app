import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Search from "./components/Search/search.jsx";
import Home from "./components/Home";
import Intro from "./components/Portfolio/Intro";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import SignUp from "./components/Portfolio/SignUp";
import store from "./components/store";
import { Provider } from "react-redux";
import Signinside from "./components/SignInSide";
import { AuthContext } from "./contexts/AuthContext.js";
import { useContext } from "react";
import Checkout from "./components/Checkout.js"
import Details from "./components/Details.jsx";

function App() {
  const {user} = useContext(AuthContext)
  console.log(user);
  return (
    <div>
     
      <HashRouter>
       <Nav />
        <Provider store={store}>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/project" element={<Intro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={!user ? <Intro /> : <Navigate to="/" />} />
              <Route path="/signin" element={<Signinside />} />
              <Route path="/search" element={<Search />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/search/:id/details" element={<Details/>} />
            </Routes>
          </div>
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
