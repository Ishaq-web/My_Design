// import { NavLink } from "react-router-dom";

import bgImage1 from "../../assets/ServiceBg.png";
import bgImage2 from "../../assets/ServiceBg2.png";
import cardBg1 from "../../assets/ServiceCrdBg.png";
// import arrow from "../../assets/ServiceCrdArr.png";

function Services() {
  const Cards = [
    { title: "App Design", img: cardBg1 },
    { title: "Web Design", img: cardBg1 },
    { title: "Brand Design", img: cardBg1 },
  ];
  return (
    <section
      className="h-screen"
      style={{
        backgroundImage: `url(${bgImage2}), url(${bgImage1})`,
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "right center, center",
      }}
    >
      <div className="text-white flex gap-80 px-30 py-10 font-baloo">
        <h1 className="text-2xl font-semibold">
          My <span className="text-orange-400">Services</span>
        </h1>
        <p className="ml-17">
          I design user-friendly interfaces, modern websites, and strong <br />
          brand identities that help businesses stand out and connect <br />
          with their audience.
        </p>
      </div>

      <div
        className="max-w-full mx-auto px-12 grid grid-cols-1 md:grid-cols-3 place-items-center
      "
      >
        {Cards.map((item, index) => (
          <div
            key={index}
            className="w-70 h-55 bg-white/4 py-5 font-baloo rounded-3xl border border-white/25"
            style={{
              clipPath:
                "path('M 0 0 H 280 V 210 Q 280 250 245 250 Q 210 250 215 300 H 0 Z')",
            }}
          >
            <h3 className="text-xl font-medium text-white ml-5 mb-4">
              {item.title}
            </h3>

            <hr className="text-white/25" />

            <img
              src={item.img}
              alt={item.title}
              className="mt-14 w-full h-full"
            />

            {/* <img src={arrow} alt="" /> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
