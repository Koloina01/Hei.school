import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import team from'..//assets/EquipeHei.webp';
import SalleHei from '..//assets/SalleHei.webp';
import Hei from '..//assets/Hei.webp'

const slides = [
  {
    id: 1,
    image: team,
    fallbackBg: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600",
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
    image: SalleHei,
    fallbackBg: "bg-gradient-to-br from-amber-600 via-orange-500 to-red-500",
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
    image: Hei,
    fallbackBg: "bg-gradient-to-br from-green-700 via-teal-600 to-cyan-500",
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

  const handleImageError = (e, slide) => {
    console.error(`Erreur de chargement de l'image: slide-${slide.id}`);
    // Masquer l'image et afficher le dégradé de fond
    e.target.style.display = 'none';
    const slideContainer = e.target.parentElement;
    slideContainer.classList.add(slide.fallbackBg);
  };

  const handleImageLoad = (slideId) => {
    console.log(`Image chargée avec succès: slide-${slideId}`);
  };

  return (
    <div className="w-full bg-white shadow-lg overflow-hidden">
      <style jsx>{`
        /* Styles pour les flèches de navigation */
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.3) !important;
          border-radius: 50% !important;
          width: 60px !important;
          height: 60px !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
          border: 2px solid rgba(255, 255, 255, 0.4) !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: rgba(255, 255, 255, 0.9) !important;
          background: rgba(255, 255, 255, 0.6) !important;
          transform: scale(1.1) !important;
          border: 2px solid rgba(255, 255, 255, 0.8) !important;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 24px !important;
          font-weight: bold !important;
        }

        /* Styles pour la pagination */
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 12px !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active {
          background: white !important;
          transform: scale(1.2) !important;
        }
      `}</style>
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
              <div className={`relative w-full h-full ${slide.fallbackBg}`}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(e, slide)}
                  onLoad={() => handleImageLoad(slide.id)}
                />
                
                {/* Overlay sombre transparent avec teinte brune pour améliorer la lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-amber-900/20 to-black/25" />

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