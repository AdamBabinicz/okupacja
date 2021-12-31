import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="kontakt">
      <div className="social">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest className="icon" />
          </a>
        </a>
      </div>
      <div className="container">
        <div className="col">
          <h3>Linki</h3>
          <a
            href="//pl.wikipedia.org/wiki/Literatura_polska_w_okresie_II_wojny_%C5%9Bwiatowej"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Okupacja</p>
          </a>
          <a
            href="//aleklasa.pl/liceum/c155-powtorka-z-epok-literackich/c352-wiek-xx-zestawienie/ii-wojna-swiatowa-1939-1945"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>1939-1945</p>
          </a>
          <a
            href="//eszkola.pl/jezyk-polski/literatura-ii-wojny-swiatowej-w-polsce-2157.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>II WŚ</p>
          </a>
          <a
            href="//klp.pl/wspolczesnosc/ser-793.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Kolumbowie</p>
          </a>
        </div>
        <div className="col">
          <h3>Filmy</h3>
          <a
            href="//www.youtube.com/watch?v=bspJ1vQoAOs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Literatura</p>
          </a>
          <a
            href="//www.youtube.com/watch?v=frdDhctKvk0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Strzelać z brylantów</p>
          </a>
          <a
            href="//www.youtube.com/watch?v=WZNi0smmkLw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Wojna i okupacja</p>
          </a>
          <a
            href="//www.youtube.com/watch?v=iIh-Baxzefs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Straty</p>
          </a>
        </div>
        <div className="col">
          <h3>Artykuły</h3>
          <a
            href="//muzeum1939.pl/straty-kultury-polskiej-w-czasie-ii-wojny-swiatowej/film/1045.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Utracone</p>
          </a>
          <a
            href="//dzielautracone.gov.pl/artykuly/46-straty-polskich-dobr-kultury-w-czasie-ii-wojny-swiatowej"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Grabieże</p>
          </a>
          <a
            href="//przystanekhistoria.pl/pa2/tematy/kultura/75821,Grabiez-dobr-kultury-w-czasie-II-wojny-swiatowej-jako-zbrodnia-wojenna-Aspekty-p.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Zbrodnia</p>
          </a>
          <a
            href="//loiv.torun.pl/2020/05/straty-polskich-dobr-kultury-podczas-ii-wojny-swiatowej"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Szczegóły</p>
          </a>
        </div>
        {/* <div className="col">
          <h3>Information</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
