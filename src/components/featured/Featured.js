import React, { useState } from "react";
import "./Featured.css";
import img from "../../assets/8.jpg";
import img1 from "../../assets/9.jpg";
import img2 from "../../assets/10.jpg";
import img3 from "../../assets/11.jpg";
import img4 from "../../assets/12.jpg";
import img5 from "../../assets/22.jpg";
import img6 from "../../assets/21.jpg";
import img7 from "../../assets/1.jpg";
import img8 from "../../assets/2.jpg";
import img9 from "../../assets/20.jpg";
import img10 from "../../assets/18.jpg";
import img11 from "../../assets/19.jpg";
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";

const Featured = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <div className="featured" id="pamięć">
      <h2 className="featured-text">
        Instytucje związane z literaturą, wydawnictwa, stowarzyszenia, szkoły
        średnie i wyższe zmuszono do zaprzestania działalności.
      </h2>
      <p className="featured-text">
        Środowisko pisarzy zostało chaotycznie rozproszone.
      </p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={img} alt="..." />
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />
        <div className="span-3 img-details">
          <div className="top">
            <h2>Terror i lódobójstwo</h2>
            <p>liczba ofiar śmiertelnych</p>
            <p className="price">6 028 000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Za jednego Niemca:</p>
                <p>100 Polaków</p>
              </div>
              <div className="info">
                <p className="bold">Profesorowie:</p>
                <p>343</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Docenci:</p>
                <p>119</p>
              </div>
              <div className="info">
                <p className="bold">Nauczyciele:</p>
                <p>7820</p>
              </div>
            </div>
          </div>
        </div>

        <div className="span-2 right-img-details">
          <p>
            Część znalazła się w obozach koncentracyjnych, łagrach, gettach,
            została deportowana w inny rejon kraju, niektórzy wyemigrowali
            (Tuwim, Wierzyński). Wielu wstąpiło w szeregi wojska polskiego poza
            granicami kraju, wielu zostało zamordowanych lub zginęło w walce.
          </p>
          <button className="btn" onClick={() => Toggle()}>
            Więcej
          </button>
          <Modal show={modal} close={Toggle} title="Masowe egzekucje">
            <p>
              Elementem polityki terroru okupanta niemieckiego były masowe
              egzekucje, przeprowadzane w większości bez procesu sądowego, ze
              złamaniem prawa międzynarodowego. Egzekucje były metodą
              zastraszania społeczeństwa i osłabienia woli oporu. Oprócz celów
              eksterminacyjnych, służyły wymuszaniu uległości społeczeństwa
              wobec polityki okupanta. Odbywały się publicznie w miastach, poza
              nimi w miejscach odosobnionych, w sposób jawny lub potajemny,
              decyzją niemieckich władz administracyjnych i policyjnych.
            </p>
            <br />
            <p>
              <em>
                pl.wikipedia.org/wiki/Zbrodnie_niemieckie_w_Polsce_(1939-1945)
              </em>
            </p>
          </Modal>
        </div>
      </div>

      {/* Section section */}
      <div className="container">
        <img className="order-2" src={img5} alt="..." />
        <img className="order-3" src={img6} alt="..." />

        <img className="span-3 image-grid-row-2 order-1" src={img7} alt="..." />

        <img className="order-4" src={img8} alt="..." />
        <img className="order-5" src={img9} alt="..." />

        <div className="span-2 right-img-details order-7">
          <p>
            Ci, którzy pozostali w kraju zajęli się organizowaniem życia
            literackiego w konspiracji: były to np. zebrania lub wieczory poezji
            – spotkania literatów w mieszkaniach w celu dyskutowania i lektury
            poezji, publikacji.
          </p>
          <button className="btn" onClick={() => Toggle1()}>
            Więcej
          </button>
          <Modal1
            show={modal1}
            close={Toggle1}
            title="Straty polskich dóbr kultury w czasie II wojny światowej"
          >
            <p>
              Straty dóbr kultury, których doznała Polska w latach 1939-1945,
              były wynikiem zarówno działań militarnych – bombardowania
              kościołów, pałaców, muzeów czy bibliotek – jak i grabieży
              dokonywanych przez oddziały wojskowe, administrację okupanta,
              zdemoralizowanych maruderów ciągnących za armią, a również przez
              miejscowych rabusiów korzystających z wojennego zamętu.
            </p>
            <br />
            <p>
              <em>
                dzielautracone.gov.pl/artykuly/46-straty-polskich-dobr-kultury-w-czasie-ii-wojny-swiatowej
              </em>
            </p>
          </Modal1>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>Grabież polskich dóbr kultury</h2>
            <p>wartość rynkowa zrabowanych dzieł sztuki</p>
            <p className="price">30 mld USD</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Dzieła sztuki:</p>
                <p>516 000 sztuk</p>
              </div>
              <div className="info">
                <p className="bold">Książki:</p>
                <p>50 mln tomów</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Dzwony kościelne:</p>
                <p>5 tys.</p>
              </div>
              <div className="info">
                <p className="bold">Rzeźby:</p>
                <p>1,4 tys.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
