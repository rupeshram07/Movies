import Home from "./pages/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Footer from "./components/Footer";
function App() {
  return (
    <Router>

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>

      <Footer />


    </Router>

  );
}

export default App;
