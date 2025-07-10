import React from "react";
import logo from "../assets/Logo-HEI.png";

export default function Navbar() {
    return (
        <nav className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div>
                            <img src={logo} alt="HEI Logo" className="w-10 h-6" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">ACCUEIL</a>
                                <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">ACTUALITÉS</a>
                                <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">BOURSES D'ÉTUDES</a>
                                <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">INSCRIPTION</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded">
                            INTRANET
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}