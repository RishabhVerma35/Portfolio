import React from "react";
import NavBarfunction from "./components/navbar";
import { createRoot } from 'react-dom/client';
import Home from "./components/Home"
import Project from "./components/Projects"
import Skills from "./components/Skill";
import Certificate from "./components/Certifications";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactMe";

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <div>
        <NavBarfunction/>
        <Home/>
        <Project/>
        <Skills/>
        <Certificate/>
        <ContactUs/>
        <Footer/>
    </div>

);