import React from "react";
import { Link } from "react-router";
import error from "../assets/images/404/404.gif";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { IoIosArrowRoundBack } from "react-icons/io";
const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Link className=" mx-auto mt-10 justify-center flex items-center gap-2 text-white font-heading text-lg bg-heading py-1.5 w-40 rounded-lg" to={"/"}>
          <IoIosArrowRoundBack className="mt-1" size={30} />
          Back to home
        </Link>
        <img className="mx-auto" src={error} alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
