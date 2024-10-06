import Home from "./pages/Home";
import Documents from "./pages/Documents";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="text-white">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <div className="container mx-auto ">
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
