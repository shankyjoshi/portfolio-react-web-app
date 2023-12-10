import { BrowserRouter } from "react-router-dom";
import Checkout from "./components/Checkout";
import Intro from "./components/Portfolio/Intro";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Intro />
      </BrowserRouter>
    </div>
  );
}

export default App;
