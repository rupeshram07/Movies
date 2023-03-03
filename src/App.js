import Home from "./pages/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Action from "./pages/Action";
import Drama from "./pages/Drama";
import Scifi from "./pages/Scifi";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Comedy from "./pages/Comedy";

function App() {
  return (
    <Router>

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/action" element={<Action />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/scifi" element={<Scifi />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/signin " element={<Signin />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>

      <Footer />


    </Router>

  );
}

export default App;
