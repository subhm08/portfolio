import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SideInfo from "./Profile";
import Navigation from "./Menu";
import Contect from './component/Contect'
import About from './component/About'
import Certification from './component/Certification'
import { Projects } from './component/Projects'

export const Menu = ({ toggleProfile, toggleMenu, isProfileOpen, isMenuOpen }) =>{
    return(
        <div className=" sticky top-0 flex z-20 justify-between mb-2 w-full sm:hidden">
            <i class={`bi ${isProfileOpen?"bi-x text-red-700":"bi-person-circle"} text-3xl cursor-pointer hover:scale-110  transitionAll`} id="profile" onClick={()=>{toggleProfile();}} ></i>
            <i class={` bi ${isMenuOpen?"bi-x text-red-700 ":"bi-list"} bi-list text-3xl cursor-pointer hover:scale-110  transitionAll pr-2`} id="menu-btn" onClick={()=>{toggleMenu();}}></i>
        </div>
    );
}

const MainBox = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleProfile = () => {
        setProfileOpen(!isProfileOpen);
        setMenuOpen(false); // Ensure the menu is closed when the profile is opened
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        setProfileOpen(false); // Ensure the profile is closed when the menu is opened
    };

    return (
    <div className="w-screen bg-gray-100 sm:mx-6 sm:mt-24 p-3 flex flex-col  sm:h-[calc(100vh-6rem)] rounded-xl overflow-x-hidden sm:min-w-96 no-scrollbar sm:w-[calc(100vw)] ">
        <Menu 
            toggleProfile={toggleProfile}
            toggleMenu={toggleMenu}
            isProfileOpen={isProfileOpen}
            isMenuOpen={isMenuOpen}
        />
        <div>
        
        {isProfileOpen && <SideInfo />}
        {isMenuOpen && <Navigation />}
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/Certification" element={<Certification/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contect" element={<Contect/>}/>
            </Routes>
        </div>
    </div>
    )
}

export default MainBox