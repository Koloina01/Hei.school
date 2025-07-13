import React from "react";
import { ArrowRight } from "lucide-react";

export default function Admission() {
    return (
        <main className="bg-[#82A0E7] mt-[5rem] w-full py-16 flex flex-col gap-12 items-center">
            <div className="text-center max-w-3xl">
                <h1 className="text-white font-bold text-5xl mb-4">Admission</h1>
                <p className="text-white text-lg">
                    Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :
                    une épreuve de français niveau B2 et une épreuve de mathématiques niveau Terminale D.
                </p>
            </div>

            <div className="flex mt-10">
                <div className="relative bg-[#F8E0BD] p-6 flex flex-col w-[25rem] h-70 text-start items-start gap-8">
                    <h2 className="text-6xl font-bold text-white">01</h2>
                    <div className="flex flex-col gap-3">
                        <p className="text-black"><span className="font-semibold text-m">Dépôt de dossiers :</span> pour les</p>
                        <p className="text-black">bacheliers de toutes séries sans limite d’âge</p>
                    </div>
                    <ArrowRight size={50} className="absolute  top-1/2 right-4 -translate-y-1/2 text-[#ffffff]" />
                </div>
                <div className="relative bg-[#FAD096] p-6 flex flex-col w-[25rem] h-70 text-start items-start gap-2">
                    <h2 className="text-6xl font-bold text-white">02</h2>
                    <div className="flex flex-col gap-3">
                        <p className="text-black"><span className="font-semibold text-m">Test de niveau</span> : composé d’une</p>
                        <p className="text-black text-m">épreuve de français niveau B2 et</p>
                        <p className="text-black text-m">d’une épreuve de mathématiques</p>
                        <p className="text-black text-m">niveau Terminale D</p>
                    </div>
                    <ArrowRight size={50} className="absolute  top-1/2 right-4 -translate-y-1/2 text-[#ffffff]" />
                </div>

                <div className="bg-[#EFBE78] p-6 flex flex-col w-[25rem] h-70 text-start items-start gap-2">
                    <h2 className="text-6xl font-bold text-white">03</h2>
                    <div className="flex flex-col gap-3">
                        <p className="text-black"><span className="font-semibold text-m">Inscription définitive</span>(si réussi)</p>
                    </div>
                    <ArrowRight size={50} className="absolute font top-1/2 right-4 -translate-y-1/2 text-[#ffffff]" />
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <button className="border-4 text-white text-xl px-8 py-3 hover:bg-[#001948] hover:border-[#001948] font-bold rounded-b-sm">
                    Inscrivez-vous ici
                </button>
                <button className="border-4 text-white text-xl px-8 py-3 bg-[#001948] border-transparent hover:bg-white hover:text-[#001948] font-bold">
                    Résultat Concours
                </button>
            </div>
        </main>
    );
}
