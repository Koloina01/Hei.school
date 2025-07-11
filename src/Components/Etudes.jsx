import React from "react";
import "../Styles/Etudes.css"
/*import Andy from "../assets/Andy.webp";
import DrToky from "../assets/DrToky.webp";
import Vagno from  "../assets/Vagno.webp";
import Propedagogique from "../assets/Propedagogique.webp";*/


export default function Etudes() {
    return (
        <div className="Admission bg-blue-300 w-auto h-160 items-center flex-col">
            <div className="flex-col items-center text">
                <h1 className="text-white font-bold text-[3rem]">Admission</h1>
                <p className="text-white items-center">
                    Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :
                une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.
                </p>
            </div>
            <div>
                <div>
                    <h2>01</h2>
                    <div>
                        <p>Dépôt de dossiers : pour les bacheliers de toutes séries sans limite d’âge</p>
                    </div>
                </div>
            </div>
        </div>
    )
}