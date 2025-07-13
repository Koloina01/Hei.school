import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Hei from '../assets/Hei.webp';
import EquipeHei from '../assets/EquipeHei.webp';
import SalleHei from '../assets/SalleHei.webp';

const slides = [
  {
    id: 1,
    image: Hei,
    title: "Haute Ecole d'Informatique",
    description:
      "'L'education est l'arme la plus puissante pour changer le monde' selon Nelson Mandela.'L'education dans l'informatique est une arme tres puissante pour lutter contre la pauvrete a Madagascar' selon HEI. C'est notre mission",
    buttons: [
      { text: "Inscrivez-vous ici", style: "bg-white hover:bg-gray-100 text-[#001948]" },
      { text: "Emplois du temps", style: "bg-[#ffba00] hover:bg-[#e6a700] text-white" },
      { text: "Programme pedagogique", style: "bg-[#001948] hover:bg-[#003366] text-white" }
    ]
  },
  {
    id: 2,
    image: EquipeHei,
    title: "Haute Ecole d'Informatique",
    description:
      "Des entreprises partenaires et une equipe pedagogique et administrative qui travaille sans relache pour le montee en competences de nos etudiants.",
    buttons: [
      { text: "Inscrivez-vous ici", style: "bg-white hover:bg-gray-100 text-[#001948]" },
      { text: "Emplois du temps", style: "bg-[#ffba00] hover:bg-[#e6a700] text-white" },
      { text: "Programme pedagogique", style: "bg-[#001948] hover:bg-[#003366] text-white" }
    ]
  },
  {
    id: 3,
    image: SalleHei,
    title: "Haute Ecole d'Informatique",
    description:
      "Une infrastructure de qualite un programme pedagogique qui repond au besoin du marche pour l'employabilite de nos etudiants",
    buttons: [
      { text: "Inscrivez-vous ici", style: "bg-white hover:bg-gray-100 text-[#001948]" },
      { text: "Emplois du temps", style: "bg-[#ffba00] hover:bg-[#e6a700] text-white" },
      { text: "Programme pedagogique", style: "bg-[#001948] hover:bg-[#003366] text-white" }
    ]
  }
];

export default function TripleCarousel() {
  const handleButtonClick = (text, title) => {
    alert(`Bouton "${text}" cliqué pour "${title}"`);
  };

  return (
    <div className="w-full bg-white shadow-lg overflow-hidden">
      <div className="relative w-full h-[1080px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />

                {/* Contenu textuel */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-16">
                  <div className="text-center max-w-7xl transform -translate-y-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-16 drop-shadow-lg whitespace-nowrap">
                      {slide.title}
                    </h1>
                    <p className="text-2xl md:text-3xl text-white mb-20 leading-relaxed drop-shadow-md">
                      {slide.description}
                    </p>
                    <div className="flex justify-center items-center gap-12 flex-wrap">
                      {slide.buttons.map((button, index) => (
                        <button
                          key={index}
                          onClick={() => handleButtonClick(button.text, slide.title)}
                          className={`px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg text-lg ${button.style}`}
                        >
                          {button.text}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Texte en bas */}
                  <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-base text-white drop-shadow-md opacity-80">
                      Habilitation MESupRES, suivant l'arrêté n° 31309/2023
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}



  