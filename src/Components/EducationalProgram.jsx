import React from "react";
import  ProPedagogique from "../assets/ProPedagogique.webp"
import DrToky from "../assets/DrToky.webp"
import Andy from "../assets/Andy.webp"
import Vagno from "../assets/Vagno.webp"

export default function EducationalPro(){
    return (
        <main className="w-full">
            <div className="flex flex-row gap-15 mt-20 justify-center">
                <div>
                    <img src={ProPedagogique} alt="ProPedagogique" className="w-120" />
                </div>
                <div className="flex flex-col gap-10">
                    <h1 className="font-bold text-5xl text-[#001948] font-serif">Le programme pédagogique</h1>
                    <div className="flex flex-col text-xl text-[#001948]">
                        <p>Suivant le système LMD, jusqu’au Master, notre formation repose sur un</p>
                        <p>programme pédagogique conçu en adéquation avec les attentes du marché. La </p>
                        <p>formation est sanctionnée par un diplôme de Licence et de Master en</p>
                        <p>Informatique reconnu par le MESupRes de Madagascar.</p>
                    </div>
                    <div>
                        <button className="border-3 px-5 py-2 text-xl font-bold text-[#001948] hover:bg-[#001948] hover:text-white">Notre Programme</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-7 mt-25">
                <div className="relative bg-[#fff5da] p-6 flex flex-col rounded-4xl w-70 h-68 text-start items-start gap-5">
                    <h2 className="text-6xl font-bold text-[#DFA408] mt-4">25%</h2>
                    <p className="text-[#001948] text-3xl font-semibold">Apprentissage théorique en présentiel</p>
                </div>
                <div className="relative bg-[#fff5da] p-6 flex flex-col rounded-4xl w-70 h-68 text-start items-start gap-2">
                    <h2 className="text-6xl font-bold text-[#DFA408] mt-4">25%</h2>
                    <p className="text-[#001948] text-3xl font-semibold">Apprentissage sur supports numériques</p>
                </div>
                <div className="relative bg-[#fff5da] p-6 flex flex-col rounded-4xl w-70 h-68 text-start items-start gap-2">
                    <h2 className="text-6xl font-bold text-[#DFA408] mt-4">25%</h2>
                    <p className="text-[#001948] text-3xl font-semibold">Travaux individuels de l’étudiant</p>
                </div>
                <div className="relative bg-[#fff5da] p-6 flex flex-col rounded-4xl w-70 h-68 text-start items-start gap-2">
                    <h2 className="text-6xl font-bold text-[#DFA408] mt-4">25%</h2>
                    <p className="text-[#001948] text-3xl font-semibold">Apprentissage en entreprise</p>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-9 mt-6">
                <img src={DrToky} alt="DrToky" className="w-95"/>
                <img src={Andy} alt="Andy" className="w-95" />
                <img src={Vagno} alt="Vagno" className="w-95" />
            </div>
        </main>
    )
}