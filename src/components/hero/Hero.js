import React from "react";
import "./Hero.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h2>
          Wszelka legalna działalność wydawnicza bądź twórcza została
          zlikwidowana.
        </h2>
        {/* <p className="search-text"> Szukaj</p>
        <form action="" className="search">
          <div>
            <input type="text" placeholder="Enter" />
          </div>
          <div className="radio">
            <input type="radio" checked />
            <label htmlFor="">Buy</label>
            <input type="radio" />
            <label htmlFor="">Rent</label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Hero;
