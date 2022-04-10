import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import styles from "./App.css";
import NavBar from "./Components/layout/Navbar/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users/Users";
import About from "./pages/About/About";
import Footer from "./Components/layout/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className={styles.root}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
