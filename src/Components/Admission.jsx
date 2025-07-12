import React from "react";
import { ArrowRight } from "lucide-react";

export default function Admission() {
    return (
        <main className="bg-[#5b6fb3] mt-[5rem] w-full py-16 flex flex-col gap-9 items-center">
            <div className="text-center max-w-3xl">
                <h1 className="text-white font-bold text-5xl mb-4">Admission</h1>
                <p className="text-white text-lg">
                    Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :
                    une épreuve de français niveau B2 et une épreuve de mathématiques niveau Terminale D.
                </p>
            </div>

            <div className="flex mt-10 gap-4">
                <div className="relative bg-yellow-100 p-6 flex flex-col rounded shadow-md w-[30rem] h-[22rem] text-start items-start gap-2">
                    <h2 className="text-7xl font-bold text-white">01</h2>
                    <p className="text-black text-2xl font-semibold">Dépôt de dossiers :</p>
                    <p className="text-black text-sm">Pour les bacheliers de toutes séries sans limite d’âge</p>
                    <ArrowRight size={40} className="absolute  top-1/2 right-4 -translate-y-1/2 text-[#ffffff]" />
                </div>
                <div className="relative bg-amber-200 p-6 flex flex-col rounded shadow-md w-[30rem] h-[22rem] text-start items-start gap-2">
                    <h2 className="text-7xl font-bold text-white">02</h2>
                    <p className="text-black text-2xl font-semibold">Test de niveau :</p>
                    <p className="text-black text-sm">
                        Composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D
                    </p>
                    <ArrowRight size={40} className="absolute top-1/2 right-4 -translate-y-1/2 text-[#ffffff]" />
                </div>

                <div className="bg-amber-300 p-6 flex flex-col rounded shadow-md w-[30rem] h-[22rem] text-start items-start gap-2">
                    <h2 className="text-7xl font-bold text-white">03</h2>
                    <p className="text-black text-2xl font-semibold">Inscription définitive</p>
                    <p className="text-black text-sm">(si test réussi)</p>
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <button className="border-4 text-white px-6 py-2 hover:bg-[#001948] hover:border-[#001948] font-bold rounded-b-sm">
                    Inscrivez-vous ici
                </button>
                <button className="border-4 text-white px-6 py-2 bg-[#001948] border-transparent hover:bg-white hover:text-[#001948] font-bold">
                    Résultat Concours
                </button>
            </div>
        </main>
    );
}
