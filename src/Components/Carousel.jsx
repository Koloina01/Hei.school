import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

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
    <div className="w-full bg-white shadow-lg overflow-hidden">
      {/* Container principal du carousel avec les nouvelles dimensions */}
      <div className="relative w-full h-[1080px] overflow-hidden">
        {/* Contrôles en overlay - positionnés en haut à droite */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-6">
          <div className="text-base text-white">
            {Object.keys(imageErrors).some(key => imageErrors[key]) && (
              <span className="text-orange-300">⚠️ Certaines images utilisent des fallbacks</span>
            )}
          </div>
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-3 px-4 py-3 bg-black bg-opacity-50 text-white rounded-md hover:bg-opacity-70 transition-all backdrop-blur-sm text-base"
          >
            {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
            {isAutoPlay ? 'Pause' : 'Play'}
          </button>
        </div>

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
                <div className="absolute top-6 left-6 bg-orange-500 text-white px-3 py-2 rounded text-sm">
                  Image de fallback
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contenu textuel et boutons en overlay absolu */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-16">
          {/* Section du contenu principal - positionnée plus haut */}
          <div className="text-center max-w-7xl transform -translate-y-16">
            {/* Titre H1 - taille augmentée pour les nouvelles dimensions */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-16 drop-shadow-lg whitespace-nowrap">
              {slides[currentSlide].title}
            </h1>
            
            {/* Texte descriptif - taille augmentée */}
            <p className="text-2xl md:text-3xl text-white mb-20 leading-relaxed drop-shadow-md">
              {slides[currentSlide].description}
            </p>
            
            {/* Les 3 boutons alignés horizontalement - taille augmentée */}
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {slides[currentSlide].buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(button.text, slides[currentSlide].title)}
                  className={`px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg text-lg ${button.style}`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>

          {/* Texte d'habilitation en bas - taille augmentée */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-base text-white drop-shadow-md opacity-80">
              Habilitation MESupRES, suivant l'arrêté n° 31309/2023
            </p>
          </div>
        </div>

        {/* Boutons de navigation - taille augmentée */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Slide précédente"
        >
          <ChevronLeft size={32} className="text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Slide suivante"
        >
          <ChevronRight size={32} className="text-gray-800" />
        </button>

        {/* Indicateurs de progression - taille augmentée */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripleCarousel;