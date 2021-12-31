import React, { useState } from "react";
import "./Navbar.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { GiBurningBook } from "react-icons/gi";
import Modal from "../Portal/Modal";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <GiBurningBook />
            Literatura&nbsp;
          </span>
          okupacyjna
        </h1>
        <button className="btn" onClick={() => Toggle()}>
          Zobacz
        </button>
        <Modal
          show={modal}
          close={Toggle}
          title="Polska może żądać od Niemców 850 mld dolarów odszkodowania"
        >
          <p>
            - Polska nigdy skutecznie nie zrzekła się odszkodowań od Niemiec za
            II wojnę światową. To aż 850 mld dolarów, na dodatek liczone bez
            uwzględnienia strat ludzkich.
          </p>
          <p>
            Łączną wartość strat materialnych, które poniosła Polska z powodu
            polityki niemieckiej III Rzeszy, oszacowano na 258 mld zł z sierpnia
            1939 r. – równowartość 49 mld ówczesnych dolarów amerykańskich.
            Według Zarządu Rezerw Federalnych USA kwota 49 mld dol. z sierpnia
            1939 r. odpowiadała w sierpniu 2014 r. kwocie 845 mld dol.
          </p>
          <br />
          <p>
            <em>
              wiadomosci.wp.pl/polska-moze-zadac-od-niemcow-850-mld-dolarow-odszkodowania-6027418181976705a
            </em>
          </p>
        </Modal>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#">Start</a>
          </li>
          <li>
            <a href="#eksterminacja">Eksterminacja</a>
          </li>
          <li>
            <a href="#pamięć">Pamięć</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
