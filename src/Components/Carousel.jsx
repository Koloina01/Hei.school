import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

// backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPgo8L3N2Zz4=')`
const TripleCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMDAxOTQ4Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5IYXV0ZSBFY29sZSBkJ0luZm9ybWF0aXF1ZTwvdGV4dD4KPC9zdmc+",
      title: "Haute Ecole d'Informatique",
      description: "'L'education est l'arme la plus puissante pour changer le monde' selon Nelson Mandela.'L'education dans l'informatique est une arme tres puissante pour lutter contre la pauvrete a Madagascar' selon HEI. C'est notre mission",
      buttons: [
        { text: "Inscrivez-vous ici", style: "bg-white hover:bg-gray-100 text-[#001948]" },
        { text: "Emplois du temps", style: "bg-[#ffba00] hover:bg-[#e6a700] text-white" },
        { text: "Programme pedagogique", style: "bg-[#001948] hover:bg-[#003366] text-white" }
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZmZiYTAwIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5FbnRyZXByaXNlcyBQYXJ0ZW5haXJlczwvdGV4dD4KPC9zdmc+",
      title: "Haute Ecole d'Informatique",
      description: "Des entreprises partenaires et une equipe pedagogique et administrative qui travaille sans relache pour le montee en competences de nos etudiants.",
      buttons: [
        { text: "Inscrivez-vous ici", style: "bg-white hover:bg-gray-100 text-[#001948]" },
        { text: "Emplois du temps", style: "bg-[#ffba00] hover:bg-[#e6a700] text-white" },
        { text: "Programme pedagogique", style: "bg-[#001948] hover:bg-[#003366] text-white" }
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNjY2NjY2Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5JbmZyYXN0cnVjdHVyZSBkZSBRdWFsaXRlPC90ZXh0Pgo8L3N2Zz4=",
      title: "Haute Ecole d'Informatique",
      description: "Une infrastructure de qualite un programme pedagogique qui repond au besoin du marche pour l'employabilite de nos etudiants",
      buttons: [
        { text: "Inscrivez-vous ici", style: "bg-white hover:bg-gray-100 text-[#001948]" },
        { text: "Emplois du temps", style: "bg-[#ffba00] hover:bg-[#e6a700] text-white" },
        { text: "Programme pedagogique", style: "bg-[#001948] hover:bg-[#003366] text-white" }
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  // Navigation vers la slide suivante
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Navigation vers la slide précédente
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Navigation directe vers une slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const handleButtonClick = (buttonText, slideTitle) => {
    alert(`Bouton "${buttonText}" cliqué pour "${slideTitle}"`);
  };

  const handleImageError = (slideId) => {
    console.error(`Erreur de chargement pour l'image de la slide ${slideId}`);
    setImageErrors(prev => ({ ...prev, [slideId]: true }));
  };

  const handleImageLoad = (slideId) => {
    console.log(`Image chargée avec succès pour la slide ${slideId}`);
    setImageErrors(prev => ({ ...prev, [slideId]: false }));
  };

  return (
    <div className="w-full bg-white shadow-lg overflow-hidden mt-2">
      {/* En-tête avec contrôles */}
      <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
        <h2 className="text-xl font-bold text-gray-800">Mon Carousel</h2>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            {Object.keys(imageErrors).some(key => imageErrors[key]) && (
              <span className="text-orange-600">⚠️ Certaines images utilisent des fallbacks</span>
            )}
          </div>
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
            {isAutoPlay ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>

      {/* Container principal du carousel */}
      <div className="relative w-full h-screen overflow-hidden" style={{ height: '80vh' }}>
        {/* Slides avec images */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative w-full h-full flex-shrink-0">
              <img
                src={imageErrors[slide.id] ? slide.fallbackImage : slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={() => handleImageError(slide.id)}
                onLoad={() => handleImageLoad(slide.id)}
              />
              {/* Overlay sombre pour la lisibilité */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              
              {/* Indicateur de fallback */}
              {imageErrors[slide.id] && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded text-xs">
                  Image de fallback
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contenu textuel et boutons en overlay absolu */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-8">
          {/* Section du contenu principal - positionnée plus haut */}
          <div className="text-center max-w-5xl transform -translate-y-8">
            {/* Titre H1 - ajusté pour rester sur une ligne */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-12 drop-shadow-lg whitespace-nowrap">
              {slides[currentSlide].title}
            </h1>
            
            {/* Texte descriptif */}
            <p className="text-lg md:text-xl text-white mb-16 leading-relaxed drop-shadow-md">
              {slides[currentSlide].description}
            </p>
            
            {/* Les 3 boutons alignés horizontalement */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {slides[currentSlide].buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(button.text, slides[currentSlide].title)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg ${button.style}`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>

          {/* Texte d'habilitation en bas */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-xs text-white drop-shadow-md opacity-80">
              Habilitation MESupRES, suivant l'arrêté n° 31309/2023
            </p>
          </div>
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Slide précédente"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Slide suivante"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>

        {/* Indicateurs de progression */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Informations sur la slide courante */}
      <div className="p-4 bg-gray-50 border-t">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Slide {currentSlide + 1} sur {slides.length}
          </span>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleCarousel;