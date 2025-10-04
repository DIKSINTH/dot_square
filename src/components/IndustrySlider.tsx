import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IndustryCard {
  title: string;
  description: string;
  image: string;
}

const industries: IndustryCard[] = [
  {
    title: "Utilities",
    description:
      "Developing innovative solutions to help utility companies optimise resource management, deliver exceptional customer service, and navigate the evolving energy landscape.",
    image:
      "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Automotive Solutions",
    description:
      "Engineering next-generation automotive solutions to enhance efficiency, safety, and connectivity for a smarter and more sustainable future.",
    image:
      "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Consumer Packaged Goods",
    description:
      "Boosting efficiency and visibility to ensure your products reach the market swiftly and satisfy customers.",
    image:
      "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "FMCG",
    description:
      "Streamlining operations to ensure that your fast-moving products are always available.",
    image:
      "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Healthcare",
    description:
      "Delivering innovative healthcare solutions to improve patient outcomes and streamline medical operations.",
    image:
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Retail",
    description:
      "Transforming retail experiences with cutting-edge technology and customer-centric solutions.",
    image:
      "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function IndustrySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(4);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1280) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [currentIndex, cardsPerView]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev === 0) return industries.length - cardsPerView;
      return Math.max(0, prev - 1);
    });
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const maxIndex = industries.length - cardsPerView;
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const getVisibleCards = () => {
    return industries.slice(currentIndex, currentIndex + cardsPerView);
  };

  const totalPages = Math.max(1, industries.length - cardsPerView + 1);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="text-orange-500 text-sm md:text-base font-semibold tracking-wide uppercase mb-3 md:mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Bespoke Solutions for Your Industry's Needs
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto px-4">
            Explore our bespoke solutions, thoughtfully designed to address the
            unique challenges and requirements of diverse industries.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute -left-4 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 hover:bg-gray-800 text-white p-3 md:p-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute -right-4 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 hover:bg-gray-800 text-white p-3 md:p-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className={`grid gap-0 transition-all duration-700 ease-in-out ${
                cardsPerView === 1
                  ? "grid-cols-1"
                  : cardsPerView === 2
                  ? "grid-cols-2"
                  : cardsPerView === 3
                  ? "grid-cols-3"
                  : "grid-cols-4"
              }`}
              style={{
                transform: isTransitioning ? "scale(0.98)" : "scale(1)",
                opacity: isTransitioning ? 0.7 : 1,
              }}
            >
              {getVisibleCards().map((industry, idx) => (
                <div
                  key={`${currentIndex}-${idx}`}
                  className="relative h-80 md:h-96 lg:h-[26rem] overflow-hidden group"
                  style={{
                    transitionDelay: `${idx * 50}ms`,
                  }}
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                    <div className="w-16 md:w-20 h-1 bg-orange-500 mb-4 transition-all duration-500" />
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 transition-all duration-500">
                      {industry.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-200 mb-4 line-clamp-3 transition-all duration-500">
                      {industry.description}
                    </p>
                    <button className="text-orange-500 font-semibold text-sm hover:text-orange-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 self-start">
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-10 lg:mt-12">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                disabled={isTransitioning}
                className={`h-2 md:h-2.5 rounded-full transition-all duration-500 ${
                  idx === currentIndex
                    ? "w-8 md:w-10 lg:w-12 bg-orange-500 shadow-lg shadow-orange-500/50"
                    : "w-2 md:w-2.5 bg-gray-300 hover:bg-gray-400 hover:w-4"
                } disabled:cursor-not-allowed`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Optional Orange Badge */}
        <div className="fixed top-0 right-0 bg-orange-500 text-white px-6 py-3 rounded-bl-2xl shadow-lg z-50 hidden xl:block">
          <div className="text-xs font-semibold">10% Off On</div>
          <div className="text-xs">First</div>
          <div className="text-xs font-bold">Invoice</div>
          <ChevronLeft className="w-5 h-5 mt-1" />
        </div>
      </div>
    </section>
  );
}
