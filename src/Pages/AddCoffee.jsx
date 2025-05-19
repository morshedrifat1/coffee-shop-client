import React from "react";
import updateBg from "../assets/images/more/11.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";
import swal from "sweetalert";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // form epty aleart
    for (let value of formData.values()) {
      if (!value.trim()) {
        swal("Please!", "Fill up all fields", "error");
        return;
      }
    }
    console.log(newCoffee);
    // coffee data post
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Success", "New Coffee Added", "success");
          form.reset();
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
            Add New Coffee
          </h1>
          <p className="font-text text-text text-base text-center max-w-[650px] mx-auto mt-8">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleAddCoffee} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="text-[#1B1A1A]/80 text-base font-semibold">
                  Name
                </label>
                <br />
                <input
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

export default AddCoffee;
