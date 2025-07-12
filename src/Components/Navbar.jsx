import React from "react";
import logo from "../assets/Logo-HEI.png";

export default function Navbar() {
    return (
        <nav className="bg-[#001948] text-white fixed top-0 w-full z-50 shadow-md items-center">
            <div className="w-[116rem] h-30 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-around">
                    <div>
                        <img src={logo} alt="HEI Logo" className="w-24 h-auto"/>
                    </div>
                    <div className="flex items-center gap-8 py-8">  
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8 gap-5 ">
                                <a href="#" className="text-lg px-3 py-2 rounded-md font-medium text-white hover:text-yellow-500 no-underline">ACCUEIL</a>
                                <a href="#" className="text-lg px-3 py-2 rounded-md font-medium text-white hover:text-yellow-500 no-underline">ACTUALITÉS</a>
                                <a href="#" className="text-lg px-3 py-2 rounded-md font-medium text-white hover:text-yellow-500 no-underline">BOURSES D'ÉTUDES</a>
                                <a href="#" className="text-lg px-3 py-2 rounded-md font-medium text-white hover:text-yellow-500 no-underline">INSCRIPTION</a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-amber-50 font-bold  rounded text-lg border-none px-6 py-1.5">
                                INTRANET
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}