import React from "react";
import claudeImage from "../assets/icone.png";
import AiImage from "../assets/IA.png";
import IngenerieLogicielImg from "../assets/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png"

export default function Domains() {
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1] flex flex-col items-center pt-8">
      <div className="w-full max-w-[1920px] bg-[#F1F1F1] px-6 text-center">
        <div className="pt-4">
          <h1 className="font-sans text-[3.25rem] md:text-[3.9rem] lg:text-[4.55rem] font-bold text-[#001948] mb-6">
            Domaines
          </h1><br></br>
        </div>
        <div className="flex justify-center py-7">
          <h3 className="font-sans text-[0.8rem] md:text-[1.56rem] lg:text-[1.82rem] text-[#001948] mb-2 mw-5xl mx-auto leading-normal">
            Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l'avenir :
          </h3>
        </div><br></br><br></br>
      </div>

      <div className="w-[1400px] h-[650px] bg-[#F1F1F1] pt-6 flex flex-wrap justify-center gap-6">
        
        <div className="w-[420px] h-[580px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02] flex flex-col">
          <img 
            src={claudeImage}
            alt="Technologie"
            className="w-full h-[250px] object-cover"
          />
          <div className="p-6 px-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl text-[#DFA408] font-bold mb-4 text-center">Cloud et cybersécurité</h3><br></br>
              <p className="text-gray-600 mb-6 px-4 text-center text-lg">
              Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.
              </p>
            </div>
            <div className="flex justify-center">
            </div>
          </div>
        </div>

        <div className="w-[420px] h-[580px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02] flex flex-col">
          <img 
            src={AiImage} 
            alt="Design"
            className="w-full h-[250px] object-cover"
          />
          <div className="p-6 px-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl text-[#DFA408] font-bold mb-4 text-center">Intelligence artificielle</h3><br></br>
              <p className="text-gray-600 mb-6 px-4 text-center text-lg">
              Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HE
              </p>
            </div>
            <div className="flex justify-center">
            </div>
          </div>
        </div>

        <div className="w-[420px] h-[580px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02] flex flex-col">
          <img 
            src={IngenerieLogicielImg}
            alt="Data"
            className="w-full h-[250px] object-cover "
          />
          <div className="p-6 px-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl text-[#DFA408] font-bold mb-4 text-center">Ingénierie logicielle</h3><br></br>
              <p className="text-gray-600 mb-6 px-4 text-center text-lg">
              Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.
              </p>
            </div>
            <div className="flex justify-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}