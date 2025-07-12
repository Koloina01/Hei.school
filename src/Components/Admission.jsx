import React from "react";


export default function Admission() {
    return (
        
        <main className="bg-[#5b6fb3] mt-[5rem] w-full py-16 flex flex-col  gap-9 items-center">
            <div className="text-center max-w-3xl">
                <h1 className="text-white font-bold text-5xl mb-4">Admission</h1>
                <p className="text-white text-lg">
                Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :
                une épreuve de français niveau B2 et une épreuve de mathématiques niveau Terminale D.
                </p>
            </div>

            <div className="flex mt-10 space-x-6">
                <div className="bg-yellow-100 p-6 rounded shadow-md w-64 text-center">
                    <h2 className="text-3xl font-bold text-white bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">01</h2>
                    <p className="text-black font-semibold">Dépôt de dossiers :</p>
                    <p className="text-black text-sm">Pour les bacheliers de toutes séries sans limite d’âge</p>
                </div>
                <div className="bg-yellow-100 p-6 rounded shadow-md w-64 text-center">
                    <h2 className="text-3xl font-bold text-white bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">02</h2>
                    <p className="text-black font-semibold">Test de niveau  :</p>
                    <p className="text-black text-sm"> Composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D</p>
                </div>
                <div className="bg-yellow-100 p-6 rounded shadow-md w-64 text-center">
                    <h2 className="text-3xl font-bold text-white bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">03</h2>
                    <p className="text-black font-semibold">Inscription définitive</p>
                    <p className="text-black text-sm"> (si test réussi)</p>
                </div>
            </div>
                <div className="flex flex-row gap-3">
                    <button className="border-4 text-white p-2 hover:bg-[#001948] hover:border-[#001948] font-bold rounded-b-sm">Inscrivez-vous ici</button>
                    <button className="border-4 text-white p-2 bg-[#001948] border-transparent hover:bg-white hover:text-[#001948] font-bold">Résultat Concours</button>
                </div>
        </main>

    )
}