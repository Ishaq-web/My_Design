import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Serve/Services";
import WhatIdo from "../components/WhatIdo/WhatIdo";
import "../styles/style.css";

function Home() {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <section>
          <Navbar />
        </section>

        <section className="mt-2">
          <Hero />
        </section>

        <section>
          <Services />
        </section>

        <section>
          <WhatIdo />
        </section>
      </div>
    </>
  );
}

export default Home;
