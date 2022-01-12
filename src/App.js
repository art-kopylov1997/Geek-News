import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';

import NavBar from "./Components/Navbar/Navbar";
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import About from './pages/About/About';
import Footer from './Components/Footer/Footer';
import Found404 from './Found404';

function App() {
    return (
        <div className={styles.root}>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="*" element={<Found404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
