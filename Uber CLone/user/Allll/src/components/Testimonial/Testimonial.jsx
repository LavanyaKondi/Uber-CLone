import React from "react";

const testimonialData = [
  {
    name: "Arjun",
    image: "",
    description: "Best Taxi Services Around. For My Every Travel For Business Purposes uses them for transfers. Always on Time And Smiling. Thanks guys ",
    aosDelay: "100",
  },
  {
    name: "Vrinda",
    image: "",
    description: "I have been using their services from last 10 months,i refuse to use any other taxi services. Go Taxi Cars are clean,they are always on time and friendly drivers. I Recommend their services for All my frnds and family!!",
    aosDelay: "300",
  },
  {
    name: "Kabir",
    image: "",
    description: "Go Taxi Services are Very helpful and they always have enough time even if we are late. Keep up the good work.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
             Testimonals
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
             What Our Clients Says About Us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
