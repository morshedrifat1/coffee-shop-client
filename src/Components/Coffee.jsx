import React, { useState } from "react";
import { BsCup } from "react-icons/bs";
import { Link } from "react-router";
import coffeeBg from "../assets/images/more/1.png"
import CoffeeItem from "./CoffeeItem";

const Coffee = ({inetialCoffes}) => {
  const [coffees,setCoffees] = useState(inetialCoffes)
  return (
    <div className="py-30 px-5 bg-no-repeat bg-cover"style={{ backgroundImage: `url(${coffeeBg})` }}>
      <div className="max-w-[1320px] mx-auto">
        <div>
        <p className="font-text text-text text-base text-center">
          --- Sip & Savor ---
        </p>
        <h1 className="font-heading text-5xl text-center text-heading [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] mt-4">
          Our Popular Products
        </h1>
          <Link to={'/add-coffee'} className="text-white bg-[#D2B48C] border-3 rounded-lg border-heading font-heading text-xl [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] w-40 px-6 py-2 flex items-center justify-center gap-2 mx-auto mt-5">
            Add Coffee
            <BsCup className="text-heading" size={20} />
          </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        
          {
            coffees.map((coffee,index)=><CoffeeItem setCoffees={setCoffees} coffees={coffees} key={index} coffee={coffee}></CoffeeItem>)
          }
      </div>
      </div>
    </div>
  );
};

export default Coffee;
