import React from "react";
import "../App.css";
import heroImg from "../assets/images/more/3.png";
import specila1 from "../assets/images/icons/1.png";
import specila2 from "../assets/images/icons/2.png";
import specila3 from "../assets/images/icons/3.png";
import specila4 from "../assets/images/icons/4.png";
const HeroSection = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroImg})` }}
        className="bg-no-repeat bg-cover "
      >
        <div className="h-[600px] grid grid-cols-1 lg:grid-cols-2 items-center max-w-[1320px] mx-auto">
          <div></div>
          <div className="max-w-[550px] lg:max-w-full mx-auto px-5">
            <h1 className="text-white font-heading text-5xl text-center lg:text-left leading-14">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="font-text text-white text-lg leading-7 mt-4 text-center lg:text-left">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="bg-[#E3B577] hover:bg-transparent hover:border hover:text-white font-heading text-xl px-6 py-2 mt-8 mx-auto block text-center lg:inline cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* our specilaty section */}

      <div className="bg-[#ECEAE3]">
        <div className="max-w-[1320px] mx-auto grid gap-10 grid-col-1 sm:grid-cols-2 lg:grid-cols-4 py-13 p-5">
            <div>
                <img className="w-12 sm:w-16" src={specila1} alt="" />
                <h1 className="text-heading font-heading text-3xl mt-4">Awesome Aroma</h1>
                <p className="text-text font-text font-base leading-6 mt-2">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img className="w-12 sm:w-16" src={specila2} alt="" />
                <h1 className="text-heading font-heading text-3xl mt-4">High Quality</h1>
                <p className="text-text font-text font-base leading-6 mt-2">We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img className="w-12 sm:w-16" src={specila3} alt="" />
                <h1 className="text-heading font-heading text-3xl mt-4">Pure Grades</h1>
                <p className="text-text font-text font-base leading-6 mt-2">The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img className="w-12 sm:w-16" src={specila4} alt="" />
                <h1 className="text-heading font-heading text-3xl mt-4">Proper Roasting</h1>
                <p className="text-text font-text font-base leading-6 mt-2">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
           
        </div>
      </div>
    </>
  );
};

export default HeroSection;
