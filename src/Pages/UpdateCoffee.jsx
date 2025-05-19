import React from "react";
import updateBg from "../assets/images/more/11.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:5000/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Update Successfull!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
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
        <div className="bg-[#f4f3f0] p-5 md:p-20 mt-12 rounded-lg">
          <h1 className="font-heading text-4xl text-center text-heading [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">
            Update Existing Coffee Details
          </h1>
          <p className="font-text text-text text-base text-center max-w-[650px] mx-auto mt-8">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleUpdateCoffee} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="text-[#1B1A1A]/80 text-base font-semibold">
                  Name
                </label>
                <br />
                <input
                  defaultValue={coffee.name}
                  name="name"
                  type="text"
                  placeholder="Enter coffee name"
                  className="font-text text-base text-[#1B1A1A]/60 bg-white p-3 rounded-sm focus:outline-1 focus:outline-gray-200 mt-2 w-full"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="text-[#1B1A1A]/80 text-base font-semibold">
                  Chef
                </label>
                <br />
                <input
                  defaultValue={coffee.chef}
                  name="chef"
                  type="text"
                  placeholder="Enter coffee chef"
                  className="font-text text-base text-[#1B1A1A]/60 bg-white p-3 rounded-sm focus:outline-1 focus:outline-gray-200 mt-2 w-full"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="text-[#1B1A1A]/80 text-base font-semibold">
                  Supplier
                </label>
                <br />
                <input
                  defaultValue={coffee.supplier}
                  name="supplier"
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="font-text text-base text-[#1B1A1A]/60 bg-white p-3 rounded-sm focus:outline-1 focus:outline-gray-200 mt-2 w-full"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="text-[#1B1A1A]/80 text-base font-semibold">
                  Taste
                </label>
                <br />
                <input
                  defaultValue={coffee.taste}
                  name="taste"
                  type="text"
                  placeholder="Enter coffee taste"
                  className="font-text text-base text-[#1B1A1A]/60 bg-white p-3 rounded-sm focus:outline-1 focus:outline-gray-200 mt-2 w-full"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="text-[#1B1A1A]/80 text-base font-semibold">
                  Category
                </label>
                <br />
                <input
                  defaultValue={coffee.category}
                  name="category"
                  type="text"
                  placeholder="Enter coffee category"
                  className="font-text text-base text-[#1B1A1A]/60 bg-white p-3 rounded-sm focus:outline-1 focus:outline-gray-200 mt-2 w-full"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="text-[#1B1A1A]/80 text-base font-semibold">
                  Details
                </label>
                <br />
                <input
                  defaultValue={coffee.details}
                  name="details"
                  type="text"
                  placeholder="Enter coffee details"
                  className="font-text text-base text-[#1B1A1A]/60 bg-white p-3 rounded-sm focus:outline-1 focus:outline-gray-200 mt-2 w-full"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="text-[#1B1A1A]/80 text-base font-semibold">
                  Price
                </label>
                <br />
                <input
                  defaultValue={coffee?.price}
                  name="price"
                  type="text"
                  placeholder="Enter Coffee Price"
                  className="font-text text-base text-[#1B1A1A]/60 bg-white p-3 rounded-sm focus:outline-1 focus:outline-gray-200 mt-2 w-full"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="text-[#1B1A1A]/80 text-base font-semibold">
                  Photo
                </label>
                <br />
                <input
                  defaultValue={coffee.photo}
                  name="photo"
                  type="text"
                  placeholder="Enter photo URL"
                  className="font-text text-base text-[#1B1A1A]/60 bg-white p-3 rounded-sm focus:outline-1 focus:outline-gray-200 mt-2 w-full"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="submit"
                  value="Add Coffee"
                  className="text-[#331A15] bg-[#D2B48C] border-3 rounded-lg border-heading font-heading text-xl [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] px-6 py-2 flex items-center justify-center gap-2 mx-auto mt-5 w-full"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
