import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/logoIcon.png";

function Navbar() {
  const navbar = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About me", path: "/about" },
    { image: logoIcon, path: "/" },
    { name: "Pages", path: "/pages" },
    { name: "Blogs", path: "/blogs" },
  ];

  const pages = [
    "Pricing",
    "Testimonials",
    "Help center",
    "Case study",
    "Contact me",
  ];

  return (
    <nav className="relative mx-auto mt-4 h-15 w-full max-w-6xl rounded-full bg-[#171717] px-2 sm:px-4">
      <ul className="flex h-full items-center justify-center gap-1 px-1 pt-1 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-22">
        {navbar.map((item, index) => (
          <li key={index} className="shrink-0 text-white">
            <div className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `inline-flex items-center justify-center gap-1 rounded-full px-2 py-1 text-xs font-baloo transition-all duration-300 sm:gap-2 sm:px-3 sm:text-sm md:px-4 md:text-base lg:text-lg ${
                    isActive
                      ? "bg-[#FD853A] text-white"
                      : "text-white hover:bg-[#FD853A] hover:text-white"
                  }`
                }
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt="Logo"
                    className="h-6 w-6 object-contain sm:h-8 sm:w-8"
                  />
                ) : (
                  item.name
                )}

                {item.name === "Pages" && (
                  <svg
                    className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:rotate-180 sm:h-4 sm:w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </NavLink>

              {item.name === "Pages" && (
                <ul className="absolute left-0 top-full z-50 hidden min-w-40 rounded-xl border border-gray-200 bg-white p-2 pt-3 shadow-lg group-hover:block sm:min-w-48">
                  {pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <NavLink
                        to={`/${page.toLowerCase().replaceAll(" ", "-")}`}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-800 transition-colors duration-200 hover:bg-[#FD853A] hover:text-white sm:px-4"
                      >
                        {page}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}

        <li className="shrink-0">
          <NavLink
            to="/contact"
            className="text-xs text-[#FD853A] underline sm:text-sm md:text-base"
          >
            Hire me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
