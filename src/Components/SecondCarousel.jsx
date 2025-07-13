import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DrLouImage from '..//assets/Dr Lou.png';
import MiradoImage from '..//assets/Mirado.png';
import JulienImage from '..//assets/Julien.png';
import RayanImage from '..//assets/mr Rayan.png';
import JeanAimeImage from '..//assets/Jean Aime.png';
import ParsionImage from '..//assets/Parison.png';
import Yannick from '..//assets/Yannick.png';
import DreTahiana from '..//assets/Dr Tahian.png';

const ScrollingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = [
    {
      id: 1,
      image: MiradoImage,
      title: "Mirado RAFENOMAHENINTSOA",
      text: "Date and Business Inteligence Specialist 5+"
    },
    {
      id: 2,
      image: JulienImage,
      title: "Julien RAJERISON",
      text: "Lead  DEveloppeur | Fondateur de l'association  Techzara"
    },
    {
      id: 3,
      image: RayanImage,
      title: "Rayan ANDRIANAMAHERY",
      text: "Developpeur back en | Cofondateur des operations de HEI"
    },
    {
      id: 4,
      image: JeanAimeImage,
      title: "Jean Aime Maxa",
      text: "Responsable technique cybersecurite chez CES France Continental(Toulouse-France)"
    },
    {
      id: 5,
      image: ParsionImage,
      title: "Parison Ravalomanda",
      text: "Ingenieur en informatique | Ingenieur logiciel chez Google (Londres-UK)"
    },
    {
      id: 6,
      image: Yannick,
      title: "Yannick Raharijaona",
      text: "Responsable technique ML chez Science (Ottawa-Canada)"
    },
    {
      id: 7,
      image: DreTahiana,
      title: "Dre Tahina Ralitera",
      text: "Docteure-Ingenieure, CNRS France | Prix l'Oreal-UNSECO pour les Femmes en Science(2017)"
    },
    {
      id: 8,
      image: DrLouImage,
      title: "Dr Lou Maurica",
      text: "Docteur-Ingenieur en informatique | Fondateur et directeur pedagogique de HEI"
    }
  ];

  const nextSlide = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };    

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-[1855px] h-[1075px] mx-auto p-12 overflow-hidden rounded-3xl" style={{ backgroundColor: 'rgb(96, 106, 243)' }}>
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-white mb-6">L'équipe pédagogique</h1>
        <p className="text-xl text-white max-w-6xl mx-auto leading-relaxed px-8">	
Notre équipe pédagogique se compose d'experts nationaux et internationaux de l'informatique, de la cybersécurité, de l'intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l'informatique et sont engagés vers l'excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l'employabilité de nos étudiants, elle a été soigneusement sélectionnée.
</p>
      </div>
      
      <div className="relative h-[700px]">
        {/* Bouton précédent */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full shadow-lg transition-all duration-200 ${
            currentIndex === 0 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-110'
          }`}
        >
          <ChevronLeft size={36} />
        </button>

        {/* Conteneur des cartes */}
        <div className="overflow-hidden mx-24 h-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-1/3 flex-shrink-0 px-6 h-full"
              >
                <div className="rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col border border-gray-200" style={{ backgroundColor: 'rgb(248, 250, 252)' }}>
                  <div className="relative overflow-hidden rounded-t-3xl flex-shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110 rounded-t-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-t-3xl"></div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col justify-center" style={{ backgroundColor: 'rgba(235, 231, 231, 0.84)' }}>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 line-clamp-2">
                      {card.title}
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed line-clamp-4">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton suivant */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= cards.length - 3}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full shadow-lg transition-all duration-200 ${
            currentIndex >= cards.length - 3 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-110'
          }`}
        >
          <ChevronRight size={36} />
        </button>
      </div>

      {/* Indicateurs */}
      <div className="flex justify-center mt-12 space-x-3">
        {Array.from({ length: cards.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Compteur */}
      <div className="text-center mt-6 text-lg text-white">
        {currentIndex + 1} - {Math.min(currentIndex + 3, cards.length)} sur {cards.length}
      </div>
    </div>
  );
};

export default ScrollingCards;