import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import DynamicBackground from "./components/DynamicBackground";
import "./animations.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <DynamicBackground>
              <Home />
            </DynamicBackground>
          }
        />
        <Route
          path="/about"
          element={
            <DynamicBackground>
              <AboutMe />
            </DynamicBackground>
          }
        />
        <Route
          path="/skills"
          element={
            <DynamicBackground>
              <Skills />
            </DynamicBackground>
          }
        />
        <Route
          path="/Experience"
          element={
            <DynamicBackground>
              <Experience />
            </DynamicBackground>
          }
        />
        <Route
          path="/Contact"
          element={
            <DynamicBackground>
              <Contact />
            </DynamicBackground>
          }
        />
        <Route
          path="/Projects"
          element={
            <DynamicBackground>
              <Projects />
            </DynamicBackground>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
