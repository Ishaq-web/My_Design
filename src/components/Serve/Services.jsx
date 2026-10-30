import { useRef, useState } from "react";

import bgImage1 from "../../assets/ServiceBg.png";
import bgImage2 from "../../assets/ServiceBg2.png";
import cardBg1 from "../../assets/ServiceCrdBg.png";
import arrow from "../../assets/ServiceCrdArr.png";

function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const Cards = [
    { title: "App Design", img: cardBg1 },
    { title: "Web Design", img: cardBg1 },
    { title: "Branding Design", img: cardBg1 },
    { title: "Branding Design", img: cardBg1 },
  ];

  const visibleCards = 3;
  const pageCount = Math.max(1, Cards.length - visibleCards + 1);

  // Pagination
  const handleSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[index];

    slider.scrollTo({
      left: card.offsetLeft - slider.offsetLeft,
      behavior: "smooth",
    });

    setActiveSlide(index);
  };

  // Active slide on scrolling
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = Array.from(slider.children);

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft - slider.offsetLeft - slider.scrollLeft,
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveSlide(Math.min(closestIndex, pageCount - 1));
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage2}), url(${bgImage1})`,
      }}
    >
      {/* Heading */}
      <div className="mx-auto flex max-w-[736px] items-start gap-[220px] pt-[65px] pb-[45px] font-baloo text-white max-md:flex-col max-md:gap-[15px] max-md:px-[25px] max-md:pt-[40px] max-md:pb-[35px]">
        <h1 className="whitespace-nowrap text-[26px] font-semibold leading-[1.2]">
          My <span className="text-[#FF812D]">Services</span>
        </h1>

        <p className="w-[450px] pt-[1px] text-sm font-normal leading-[14px] max-md:w-full max-md:max-w-[350px]">
          I design user-friendly interfaces, modern websites, and strong <br />
          brand identities that help businesses stand out and connect <br />
          with their audience.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="mx-auto flex w-[748px] max-w-[calc(100%-40px)] snap-x snap-mandatory gap-[14px] overflow-x-auto overflow-y-hidden scroll-smooth px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:w-full max-md:max-w-full max-md:px-[20px]"
      >
        {Cards.map((item, index) => (
          <div
            key={index}
            className="relative h-[295px] w-[240px] shrink-0 snap-start font-baloo max-md:snap-center"
          >
            {/* SVG Clip Path Definition */}
            <svg
              className="absolute h-0 w-0"
              viewBox="0 0 240 295"
              aria-hidden="true"
            >
              <defs>
                <clipPath
                  id={`serviceClip${index}`}
                  clipPathUnits="userSpaceOnUse"
                >
                  <path d="M24 0 H216 Q240 0 240 24 V218 Q240 235 220 226 Q194 218 176 244 Q164 259 164 276 H24 Q0 276 0 252 V24 Q0 0 24 0 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Card Content - Clipped to SVG */}
            <div
              className="absolute inset-0 overflow-hidden border border-white/50 bg-white/[0.07] backdrop-blur-[5px]"
              style={{
                clipPath: `url(#serviceClip${index})`,
              }}
            >
              {/* Glass Background */}
              <div className="absolute inset-0 bg-white/[0.07]" />

              {/* Card Title */}
              <h3 className="relative z-[2] px-[20px] pt-[25px] pb-[13px] text-[17px] font-semibold leading-[27px] text-white">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="relative z-[2] w-full border-t border-white/30" />

              {/* Three Image Layers */}
              <div className="absolute bottom-0 left-0 h-[203px] w-full">
                {/* Back Layer */}
                <div className="absolute top-0 left-[13px] h-[155px] w-[214px] rounded-[22px] bg-white/25" />

                {/* Middle Layer */}
                <div className="absolute top-[13px] left-[13px] h-[165px] w-[214px] rounded-[22px] bg-white/65" />

                {/* Main Image */}
                <div className="absolute top-[26px] left-0 h-[178px] w-full overflow-hidden rounded-[22px] bg-white shadow-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* SVG Border */}
            <svg
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
              viewBox="0 0 240 295"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M24 0 H216 Q240 0 240 24 V218 Q240 235 220 226 Q194 218 176 244 Q164 259 164 276 H24 Q0 276 0 252 V24 Q0 0 24 0 Z"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="1"
              />
            </svg>

            {/* Orange Arrow */}
            <button
              type="button"
              aria-label={`View ${item.title}`}
              onClick={() => console.log(`Open ${item.title}`)}
              className="absolute right-0 bottom-0 z-20 flex h-[62px] w-[62px] items-center justify-center rounded-full border-0 bg-[#FF812D]"
            >
              <img
                src={arrow}
                alt=""
                className="h-[45px] w-[45px] object-contain"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-[18px] flex items-center justify-center gap-[7px] pb-[30px]">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleSlide(index)}
            className={`h-[7px] rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-[41px] bg-[#FF812D]"
                : "w-[7px] bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
