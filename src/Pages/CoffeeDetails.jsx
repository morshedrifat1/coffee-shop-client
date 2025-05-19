import React from "react";
import updateBg from "../assets/images/more/11.png";
import { Link, useLoaderData } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";
const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  return (
    <div
      style={{ backgroundImage: `url(${updateBg})` }}
      className="bg-no-repeat bg-cover my-18 px-5"
    >
      <div className="max-w-[1320px] mx-auto">
        <Link
          className=" mx-auto mt-10 justify-center flex items-center gap-2 text-white font-heading text-lg bg-heading py-1.5 w-40 rounded-lg"
          to={"/"}
        >
          <IoIosArrowRoundBack className="mt-1" size={30} />
          Back to home
        </Link>
        <div className="bg-[#f4f3f0] p-5 md:p-20 mt-12 rounded-lg flex flex-col sm:flex-row py-10  lg:py-30 px-0 lg:px-50 items-center justify-center gap-0 lg:gap-20">
          <div>
            <img className="w-[280px] md:w-[350px]" src={coffee.photo} alt="" />
          </div>
          <div>
            <h1 className="font-heading text-4xl text-heading [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">
              {coffee.name}
            </h1>
            <div className="space-y-3 mt-5 sm:mt-8">
          <p className="text-lg text-heading font-text">
            <span className="font-text font-semibold text-text text-lg">
              Name:
            </span>
            {coffee.name}
          </p>
          <p className="text-lg text-heading font-text">
            <span className="font-text font-semibold text-text text-lg">
              Chef:
            </span>
            {coffee.chef}
          </p>
          <p className="text-lg text-heading font-text">
            <span className="font-text font-semibold text-text text-lg">
              Taste:
            </span>
            {coffee?.taste}
          </p>
          <p className="text-lg text-heading font-text">
            <span className="font-text font-semibold text-text text-lg">
              Supplier:
            </span>
            {coffee?.supplier}
          </p>
          <p className="text-lg text-heading font-text">
            <span className="font-text font-semibold text-text text-lg">
              Category:
            </span>
            {coffee?.category}
          </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
