import { FaQuoteLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import carton from "../../assets/Carton1.png";
import ellips from "../../assets/Ellips1.png";

function Hero() {
  return (
    <section className="relative mx-auto h-[475px] w-full max-w-6xl overflow-hidden font-baloo sm:h-[490px]">
      {/* Center Heading */}
      <div className="absolute left-1/2 top-7 z-20 flex -translate-x-1/2 flex-col items-center gap-y-4 text-center">
        <button className="h-8 w-20 rounded-full border border-gray-400 text-xs">
          Hello!
        </button>

        <h1 className="whitespace-nowrap text-2xl font-semibold leading-tight text-[#454545] sm:text-4xl md:text-[42px]">
          I'm <span className="text-[#FD853A]">Ishaq,</span>
          <br />
          UI/UX Designer
        </h1>
      </div>

      {/* Left Testimonial */}
      <div className="absolute left-8 top-40 z-20 hidden w-70 sm:block">
        <FaQuoteLeft size={18} />

        <p className="mt-3 text-lg leading-4 font-medium text-black">
          Professional, responsive, and
          <br />
          incredibly talented — great
          <br />
          experience working together.
        </p>
      </div>

      {/* Right Experience */}
      <div className="absolute right-12 top-60 z-20 hidden text-right sm:block">
        <div className="text-2xl font-semibold tracking-tight text-[#FD853A]">
          ★★★★★
        </div>

        <h2 className="text-3xl font-bold leading-tight text-[#171717]">
          3+ Years
        </h2>

        <p className="mt-1 text-sm text-[#333333]">Experience</p>
      </div>

      {/* Orange Ellipse Background */}
      <img
        src={ellips}
        alt=""
        className="absolute -bottom-45 left-1/2 z-0 h-120 w-120 max-w-none -translate-x-1/2 object-contain"
      />

      {/* Center Cartoon Image */}
      <img
        src={carton}
        alt="UI/UX Designer"
        className="absolute bottom-0 left-1/2 z-10 h-84 w-80 max-w-none -translate-x-1/2 object-contain object-bottom"
      />

      {/* Buttons Over the Image */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-white/70 bg-white/10 p-1">
        <NavLink
          to="/contact"
          className="rounded-full bg-[#FD853A] px-7 py-3 text-[10px] font-semibold text-white transition hover:bg-[#e96f25]"
        >
          Hire Me
        </NavLink>

        <button className="px-1 py-3 text-[10px] text-white">
          Download CV
        </button>
      </div>
    </section>
  );
}

export default Hero;
