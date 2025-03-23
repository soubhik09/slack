import React from "react";
import Navbar from "./components/Navbar";
import Navinfo from "./components/Navinfo";
import Herosection from "./components/Herosection";
import Marquee from "react-fast-marquee";
import Card from "./components/Card";
import PopUp from "./components/Popup";

function App() {
  return (
    <div className="max-w-[1024px] m-auto">
      <Navbar />
      <Navinfo />
      <Herosection />
      <Marquee className="mt-15">
        <div className="flex gap-10">
          <img
            className="w-20"
            src="https://download.logo.wine/logo/Fox_Corporation/Fox_Corporation-Logo.wine.png"
            alt=""
          />
          <img
            className="w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bcuUCm3XhtjDVc5jyGPTeY3wpOU6kiZFZQ&s"
            alt=""
          />
          <img
            className="w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHj700qzZ6Q4-5M6qDoLWxwipgSK0ftnAlvA&s"
            alt=""
          />
          <img
            className="w-20"
            src="https://i.pinimg.com/736x/2d/ad/6a/2dad6af4a4ce24a56aa3a36644133e59.jpg"
            alt=""
          />
          <img
            className="w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIiz2OCT4nfs9iqbCDlAkz7s6unLgW3ADWg&s"
            alt=""
          />
          <img
            className="w-20"
            src="https://download.logo.wine/logo/Fox_Corporation/Fox_Corporation-Logo.wine.png"
            alt=""
          />
          <img
            className="w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bcuUCm3XhtjDVc5jyGPTeY3wpOU6kiZFZQ&s"
            alt=""
          />
          <img
            className="w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHj700qzZ6Q4-5M6qDoLWxwipgSK0ftnAlvA&s"
            alt=""
          />
          <img
            className="w-20"
            src="https://i.pinimg.com/736x/2d/ad/6a/2dad6af4a4ce24a56aa3a36644133e59.jpg"
            alt=""
          />
          <img
            className="w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIiz2OCT4nfs9iqbCDlAkz7s6unLgW3ADWg&s"
            alt=""
          />
        </div>
      </Marquee>
      <Card />
      <PopUp />
    </div>
  );
}

export default App;
