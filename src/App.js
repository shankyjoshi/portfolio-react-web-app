import { BrowserRouter } from "react-router-dom";
import Checkout from "./components/Checkout";
import Intro from "./components/Portfolio/Intro";
import Search from "./components/Search/search";
import SignInSide from "./components/SignInSide";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Search /> */}
        {/* <SignInSide /> */}
        <Intro />
      </BrowserRouter>
    </div>
  );
}

export default App;
