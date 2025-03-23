import React from "react";

function Card() {
  return (
    <div className=" flex justify-center items-center gap-5 p-5">
      <div className="w-[50%] flex justify-center items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXjAKTcDBIObl3j_sRfN6pcacap_X0EMWbw&s"
          alt="w-[100%]"
        />
      </div>
      <div className="w-[50%] flex flex-col gap-5">
        <h1 className=" text-3xl font-bold">
          Now is your moment to build a better tomorrow
        </h1>
        <p>
          We've seen what the future can be. Now its time to decide what it will
          be
        </p>
        <div>
        <div className="border border-[#4d154a] px-3 py-1.5 text-[#4d154a] rounded w-fit">
          TALK TO SALES
        </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
