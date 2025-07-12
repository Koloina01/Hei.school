import React from "react";
import Java from "../assets/Java.png"
import Python from "../assets/python.png"
import JS from "../assets/JS.png"
import C from "../assets/C.png"
import TS from "../assets/TS.png"
import Docker from "../assets/docker.png"
import NextJs from "../assets/nextJs.png"
import AWS from "../assets/aws.png"
import Serverless from "../assets/serverless.png"
import re from "../assets/react.png"
import Openapi from "../assets/openapi.png"

export default function TechStac() {
    return (
        <main className="flex flex-col bg-gray-200 mt-20 gap-16">
            <div className="flex flex-col gap-6 items-center mt-20">
                <h1 className="font-bold text-[#001948] text-5xl font-serif">Les technos et langages utilisées</h1>
                <div className="text-[#001948] text-xl flex flex-col items-center">
                    <p>Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent</p>
                    <p>une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les</p>
                    <p>développeurs à travers le monde.</p>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-18">
                <img src={Java} alt="Java" className="w-30 h-35" />
                <img src={Python} alt="python" className="w-35 h-35" />
                <img src={JS} alt="JS" className="w-30 h-35" />
                <img src={C} alt="C" className="w-30 h-35" />
                <img src={TS} alt="TS" className="w-30 h-35" />
            </div>
            <div className="flex flex-row justify-center gap-18">
                <img src={Docker} alt="docker" className="w-25 h-16" />
                <img src={NextJs} alt="nextJs" className="w-25" />
                <img src={AWS} alt="aws" className="w-25" />
                <img src={Serverless} alt="serverless" className="w-40" />
                <img src={re} alt="react" className="w-30 h-15" />
                <img src={Openapi} alt="openapi" className="w-35" />
            </div>
        </main>
    )
}