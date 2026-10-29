import { NavLink } from "react-router-dom";

import bgImage from "../../assets/ServiceBg.png";
import appImg from "../../assets/ServiceCrdBg.png";
import Arrow from "../../assets/ServiceCrdArr.png";

function Services() {
  const services = [
    { title: "App Design", img: appImg },
    { title: "Web Design", img: appImg },
    { title: "Branding Design", img: appImg },
  ];

  return (
    <section
      className="relative min-h-[512px] w-full overflow-hidden bg-cover bg-center bg-no-repeat px-1 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Heading */}
      <div className="mx-auto flex max-w-[736px] items-start justify-between px-1 pt-[68px]">
        <h1 className="shrink-0 font-baloo text-[25px] font-medium leading-tight">
          My <span className="text-[#FF812F]">Services</span>
        </h1>

        <p className="mt-[0px] w-[390px] max-w-[55%] text-[10px] leading-[13px]">
          I design user-friendly interfaces, modern websites, and strong
          <br />
          brand identities that help businesses stand out and connect
          <br />
          with their audience.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-[57px] grid max-w-[746px] grid-cols-1 gap-[14px] px-0 sm:grid-cols-3">
        {services.map((item, index) => (
          <article
            key={item.title}
            className="group relative h-[294px] min-w-0 overflow-visible rounded-t-[23px] rounded-bl-[23px] border border-white/55 bg-white/[0.07] backdrop-blur-[3px]"
          >
            {/* Card title */}
            <div className="flex h-[67px] items-center border-b border-white/30 px-[21px]">
              <h2 className="font-baloo text-[16px] font-semibold">
                {item.title}
              </h2>
            </div>

            {/* Back layer */}
            <div className="absolute left-[10%] top-[90px] h-[166px] w-[85%] rounded-[22px] bg-white/25" />

            {/* Middle layer */}
            <div className="absolute left-[5%] top-[103px] h-[177px] w-[90%] rounded-[22px] bg-white/65" />

            {/* Main image panel */}
            <div className="absolute left-0 top-[116px] z-10 h-[177px] w-full overflow-hidden rounded-[22px] bg-white">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              {/* Cut / folded bottom-right corner */}
              <div
                className="absolute bottom-0 right-0 h-[40px] w-[40px] bg-[#FF812F]"
                style={{
                  clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                }}
              />

              <div
                className="absolute bottom-0 right-0 h-[29px] w-[29px] bg-[#171717]"
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                }}
              />
            </div>

            {/* Orange arrow */}
            <NavLink
              to="/services"
              aria-label={`View ${item.title}`}
              className="absolute -bottom-[1px] -right-[1px] z-20 flex h-[68px] w-[68px] translate-x-0 translate-y-0 items-center justify-center rounded-full bg-[#FF812F] shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={Arrow}
                alt=""
                className="h-[30px] w-[30px] object-contain"
              />
            </NavLink>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-[18px] flex items-center justify-center gap-[7px] pb-4">
        <span className="h-[7px] w-[41px] rounded-full bg-[#FF812F]" />
        <span className="h-[7px] w-[7px] rounded-full bg-white" />
        <span className="h-[7px] w-[7px] rounded-full bg-white" />
      </div>
    </section>
  );
}

export default Services;
