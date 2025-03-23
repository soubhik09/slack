import React from "react";
import { Link } from "react-router";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-1">
      <div className="flex justify-center items-center">
        <div className="mr-5">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png"
            alt="logo"
            className="w-20"
          />
        </div>
        <ul className="flex gap-5">
          <li className="flex justify-center items-center">
            <Link to={"#"}>Products</Link>
            <RiArrowDropDownLine />
          </li>
          <li>
            <Link to={"#"}>Enterprise </Link>
          </li>
          <li>
            <Link to={"#"}>Resources </Link>
          </li>
          <li>
            <Link to={"#"}>Pricing </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <FaSearch />
        </div>
        <div>Sign in</div>
        <div className="border border-[#4d154a] px-3 py-1.5 text-[#4d154a] rounded">
          TALK TO SALES
        </div>
        <div className="bg-[#4d154a] px-3 py-1.5 text-white rounded">TRY FOR FREE</div>
      </div>
    </div>
  );
}

export default Navbar;