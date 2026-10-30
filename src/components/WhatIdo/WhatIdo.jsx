import icon1 from "../../assets/whatIdoIcon.png";

function WhatIdo() {
  const Cards = [
    {
      icon: icon1,
      title: "UI/UX Design",
      subtitle:
        "Understanding user behavior through research to guide design decisions",
    },
    {
      icon: icon1,
      title: "UI/UX Design",
      subtitle:
        "Understanding user behavior through research to guide design decisions",
    },
    {
      icon: icon1,
      title: "UI/UX Design",
      subtitle:
        "Understanding user behavior through research to guide design decisions",
    },
    {
      icon: icon1,
      title: "UI/UX Design",
      subtitle:
        "Understanding user behavior through research to guide design decisions",
    },
    {
      icon: icon1,
      title: "UI/UX Design",
      subtitle:
        "Understanding user behavior through research to guide design decisions",
    },
    {
      icon: icon1,
      title: "UI/UX Design",
      subtitle:
        "Understanding user behavior through research to guide design decisions",
    },
  ];

  return (
    <>
      <section className="w-full min-h-screen bg-[#FAFAFA] font-baloo">
        <div className="flex flex-col gap-2 items-center mt-10">
          <h1 className="text-4xl font-semibold">
            What <span className="text-orange-400">I do</span>
          </h1>

          <p className="text-center text-lg">
            A blend of creativity and strategy — I craft digital experiences
            that <br /> are both beautiful and functional.
          </p>
        </div>

        <div className="grid grid-cols-3 divide-x divide-y divide-gray-300 my-5 mx-25">
          {Cards.map((item, index) => (
            <div key={index} className="px-10 py-10">
              <div className="flex gap-4 items-center">
                <img src={item.icon} alt="" className="w-8 h-8" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>

              <p className="mt-4">{item.subtitle}</p>

              <button className="mt-10 text-orange-400 underline">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default WhatIdo;
