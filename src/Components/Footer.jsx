import React from "react";
import logo from "../assets/Logo-HEI.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="flex flex-row bg-[#001948] text-white justify-center gap-40 p-8">
            <div className="flex flex-col gap-6">
                <img src={logo} alt="Logo HEI" className="w-25"/>
                <div className="text-gray-200 flex flex-col gap-1">
                    <p>Formation habilitée par</p>
                    <p>l’État suivant le système</p>
                    <p>LMD</p>
                </div>
                <div className="text-gray-200 flex flex-col gap-1">
                    <p>Habilitation MESupRes</p>
                    <p>n°31309/2023</p>
                </div>
            </div>
            <div className="text-gray-200 flex flex-col justify-center gap-4 mt-13">
                <h1 className="text-white font-bold text-2xl">Adresse</h1>
                <p>II J 161 R Ambodivoanjo</p>
                <p>Ivandry Antananarivo</p>
                <p>101, Madagascar</p>
            </div>
            <div className="flex flex-col justify-center mt-23">
                <h1 className="font-bold text-2xl">Navigation</h1>
                <a href="#" className="text-lg px-3 py-2 rounded-md font-medium text-white hover:text-yellow-500 no-underline">Accueil</a>
                <a href="#" className="text-lg px-3 py-2 rounded-md font-medium text-white hover:text-yellow-500 no-underline">Actualités</a>
                <a href="#" className="text-lg px-3 py-2 rounded-md font-medium text-white hover:text-yellow-500 no-underline">Bourses d'études</a>
                <a href="#" className="text-lg px-3 py-2 rounded-md font-medium text-white hover:text-yellow-500 no-underline">Inscription</a>
            </div>
            <div className="flex flex-col gap-4 justify-center">
                <h1 className="text-2xl font-bold">Médias sociaux</h1>
                <div className="flex flex-row gap-3">
                    <div className="border-1 p-3 rounded-4xl border-[#dfa408] bg-[#dfa408]">
                        <FaFacebook size={20} />
                    </div>
                    <div className="border-1 p-3 rounded-4xl border-[#dfa408] bg-[#dfa408]">
                        <FaInstagram size={20}  />
                    </div>
                    <div className="border-1 p-3 rounded-4xl border-[#dfa408] bg-[#dfa408]">
                        <FaLinkedin size={20} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
