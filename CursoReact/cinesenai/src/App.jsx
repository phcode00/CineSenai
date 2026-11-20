import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Contador } from "./components/Contador";

function App () {

  return (
    <>
    <Contador />
    <Navbar />
      <Home />
    </>
  );
}

export default App;