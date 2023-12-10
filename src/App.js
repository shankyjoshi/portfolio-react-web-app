import { BrowserRouter } from "react-router-dom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Intro from "./components/Portfolio/Intro";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Intro />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
