import React from "react";
import LogoNexta from "../assets/LOGO-NEXTA.webp"
import PasserelleNumerique from "../assets/Passerelle-Numerique.png"
import Yooz from "../assets/Yooz-2023-Logo-2.webp"
import LogoEtech from "../assets/logo-etech.png"
import LogoEmit from "../assets/logo_emit.png"
import Numer from "../assets/Logo-Numer-vf.png"
import BPartners from "../assets/Bp.webp"
import YifLogo from "../assets/YIF_LOGO.webp"
import KanteCo from "../assets/logo-kante-company-1.png"

export default function Partner() {
    return (
        <main className="flex flex-col bg-white gap-16">
            <div className="flex flex-col gap-6 items-center mt-20">
                <h1 className="font-bold text-[#001948] text-5xl font-serif">Nos partenaires</h1>
                <div className="text-[#001948] text-xl flex flex-col items-center">
                    <p>L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps</p>
                    <p>enseignant mais aussi du soutien et la collaboration des entreprises partenaires</p>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-18">
                <img src={LogoNexta} alt="Nexta" className="w-27 h-25" />
                <img src={PasserelleNumerique} alt="PN" className="w-3_ h-20" />
                <img src={Yooz} alt="Yooz" className="w-1_ h-14" />
                <img src={LogoEtech} alt="Etech" className="w-1_ h-13" />
                <img src={LogoEmit} alt="Emit" className="w-1_ h-18" />
            </div>
            <div className="flex flex-row justify-center gap-18">
                <img src={Numer} alt="Numer" className="w-1_ h-25" />
                <img src={BPartners} alt="BPartners" className="w-1_ h-17" />
                <img src={YifLogo} alt="YifLogo" className="w-1_ h-23" />
                <img src={KanteCo} alt="KanteCo" className="w-40" />
            </div>
        </main>
    )
}