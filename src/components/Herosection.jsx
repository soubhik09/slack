import React from "react";

function Herosection() {
  return (
    <div className="flex mt-10 px-15 justify-between">
      <div className="max-w-1/2 flex flex-col justify-between">
        <h1 className=" text-5xl font-bold">Slack is where the future works</h1>
        <p>
          Transform the way you work with one place for everyone and everythings
          you need to get stuff done.
        </p>
        <div className="flex gap-2">
          <div className="bg-[#4d154a] px-3 py-1.5 text-white rounded flex justify-center items-center">
            TRY FOR FREE
          </div>
          <div className="bg-sky-500 px-3 py-1.5 text-white rounded flex justify-center items-center gap-2">
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-10 bg-white"/>
            SIGN UP WITH GOOGLE
          </div>
        </div>
      </div>
      <div className="max-w-1/2">
        <img
          src="https://www.mocoapp.com/system/integration/image/9/slack-anleitung-moco.png"
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
}

export default Herosection;
