import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";

function Navinfo() {
  const [hide, setHide] = useState("");
  const clickHandler = () => {
    setHide("hidden");
  };
  return (
    <div
      className={`${hide} bg-blue-400 px-8 py-5 rounded-full flex justify-between items-center text-white mt-3`}
    >
      <p className="flex justify-center items-center gap-1">
        Slack is your <span className="font-bold">digital HQ</span>. Meet the
        new features keeping teams connected in a work-from-anywhere world.
        <span className="underline mr-1 font-bold">Let's go</span>
        <FaArrowRight />
      </p>

      <RxCross2 onClick={clickHandler} />
    </div>
  );
}

export default Navinfo;
