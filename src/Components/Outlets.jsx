import React from "react";
import logo from "../assets/Logo-HEI.png"; 
import womanImage from "..//assets/Woman.webp"

export default function Outlets() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-.1">
      <div className="w-full max-w-[1800px] h-[90vh] bg-white flex flex-col lg:flex-row rounded-none  overflow-hidden">

        <div className="w-full lg:w-[60%] h-full p-8 md:p-12 lg:p-16 overflow-y-auto flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl text-center space-y-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001948]">
              QUELQUES DÉBOUCHÉS
            </h1><br></br>
            <br></br>

            <div className="space-y-12 text-center">
              <p className="text-xl md:text-2xl lg:text-3xl text-[#001948] leading-relaxed">
              Formez-vous à une panoplie de métiers du numérique avec nous
             et venez acquérir les fondements de la programmation 
             (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…
              </p><br></br>
              <br></br>
            
              <p className="text-xl md:text-2xl lg:text-3xl text-[#001948] leading-relaxed">
                Développeur back end, développeur front end, développeurs mobile, chefs de projet, 
                exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, 
                auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
              </p><br></br>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] h-full bg-gray-50 flex items-center justify-center p-7 md:p-12 lg:p-16">
         <div className="flex flex-col items-center justify-center w-full h-full">
           <img 
             src={womanImage} 
             alt="Illustration métiers" 
             className="w-full h-auto max-h-[80vh] object-contain" 
           />
         </div>
        </div>

      </div>
    </div>
  );
}