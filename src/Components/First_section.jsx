import React from "react";
import logo from "../assets/StudentHei.webp";
import "../Styles/Navbar.css"

export default function First_section() {
    return (
        <div className="border flex w-[1856px] h-[1080px] border-black">
            <div className="w-[960px] h-[1080px] bg-white flex items-center justify-center">
                <img 
                    src={logo} 
                    alt="Logo HEI" 
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <div className="w-[960px] h-[1080px] bg-white flex flex-col items-center justify-center px-16">
                <h1 className="font-sans text-6xl text-[#001948] font-bold">A propos de nous</h1>
                
                <div className="mt-4 w-full">
                    <br />
                    <h2 className="font-sans text-4xl text-[#001948] font-bold">+3</h2>
                    <br />
                    <p className="font-sans text-2xl text-[#001948] mt-4">
                        Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers
                        de l'informatique. Nous sommes un groupe d'experts, de
                        professionnels et des passionnés de l'informatique de Madagascar
                        et du monde entier.
                    </p>
                </div>

                <div className="mt-4 w-full">
                    <br />
                    <h2 className="font-sans text-4xl text-[#001948] font-bold">+250 étudiants</h2>
                    <br />
                    <p className="font-sans text-2xl text-[#001948] mt-4">
                        Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à notre formation habilitée par l'État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la "grande famille HEI".
                    </p>
                </div>

                <div className="mt-4 w-full">
                    <br />
                    <h2 className="font-sans text-4xl text-[#001948] font-bold">Notre mission</h2>
                    <br />
                    <p className="font-sans text-2xl text-[#001948] mt-4">
                        Notre mission est d'amener des jeunes malgaches sur des domaines porteurs comme l'intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
                    </p>
                </div>
            </div>
        </div>
    )
}