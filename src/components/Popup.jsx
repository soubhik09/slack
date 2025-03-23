import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
function PopUp() {
  const [hide, setHide] = useState("");
  const clickHandler = () => {
    setHide("hidden");
  };
  return (
    <div
      className={`${hide} bg-white w-[150px] text-xs shadow-2xl p-2 flex flex-col fixed bottom-5 right-5`}
    >
      <div className="self-end">
        <RxCross2 onClick={clickHandler} />
      </div>
      <div className="flex flex-col gap-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid
          veniam maxime rem quisquam perspiciatis iusto. Corrupti dignissimos o
        </p>
        <div className="bg-[#4d154a] p-1 text-white text-center rounded">
          ACCEPT ALL COOKIES
        </div>
      </div>
    </div>
  );
}

export default PopUp;
