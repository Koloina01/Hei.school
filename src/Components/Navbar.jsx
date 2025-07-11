import React from "react";
import logo from "../assets/Logo-HEI.png";
import "../Styles/Navbar.css"

export default function Navbar() {
    return (
        <nav className="fixed top-0 bg-[#001948] text-white">
            <div className="w-[116rem] h-30 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-around navbar-big-container">
                    <div className="navbar-logo">
                        <img src={logo} alt="HEI Logo" className="w-[6rem] h-auto logo-hei"/>
                    </div>
                    <div className="flex items-center navbar-container">  
                        <div className="hidden md:block navbar-menu">
                            <div className="ml-10 flex items-baseline space-x-4 navbar-link">
                                <a href="#" className="text-[1.1rem] px-3 py-2 rounded-md text-sm font-medium navbar-navlink">ACCUEIL</a>
                                <a href="#" className="text-[1.1rem] px-3 py-2 rounded-md text-sm font-medium navbar-navlink">ACTUALITÉS</a>
                                <a href="#" className="text-[1.1rem] px-3 py-2 rounded-md text-sm font-medium navbar-navlink">BOURSES D'ÉTUDES</a>
                                <a href="#" className="text-[1.1rem] px-3 py-2 rounded-md text-sm font-medium navbar-navlink">INSCRIPTION</a>
                            </div>
                        </div>
                        <div className="hidden md:block navbar-button">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded button">
                                INTRANET
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}