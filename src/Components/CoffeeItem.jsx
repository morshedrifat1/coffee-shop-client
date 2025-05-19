import React from "react";
import { FaEye } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
const CoffeeItem = ({ coffee,setCoffees,coffees }) => {
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              // remove coffee from state 
              setCoffees(coffees.filter(coffe=>coffe._id!=coffee._id));
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="bg-[#F5F4F1]/70 p-8 rounded-xl flex flex-col lg:flex-row items-center">
      <div className="flex-1/3">
        <img src={coffee.photo} alt="" />
      </div>
      <div className="flex flex-col gap-7 lg:flex-row flex-2/3 items-center justify-between">
        <div className="space-y-3">
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
              Price: 
            </span>
             {coffee.price}
          </p>
        </div>
        <div className="flex flex-row lg:flex-col gap-4">
          <Link to={`/coffee-details/${coffee._id}`}>
            <div className=" bg-[#d2b48c] p-2.5 rounded-lg w-10 cursor-pointer">
              <FaEye className="text-white" size={20} />
            </div>
          </Link>
          <Link to={`/update-coffee/${coffee._id}`}>
            {" "}
            <div className=" bg-[#3c393b] p-2.5 rounded-lg w-10 cursor-pointer">
              <RiPencilFill className="text-white" size={20} />
            </div>
          </Link>
          <div
            onClick={() => handleDelete(coffee._id)}
            className=" bg-[#ea4744] p-2.5 rounded-lg w-10 cursor-pointer"
          >
            <MdDelete className="text-white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeItem;
