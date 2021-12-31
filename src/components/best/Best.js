import React, { useState } from "react";
import "./Best.css";
import img from "../../assets/5.jpg";
import img1 from "../../assets/6.jpg";
import img2 from "../../assets/7.jpg";
import Modal from "../Portal/Modal";

const Best = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="best" id="eksterminacja">
      <h2>Eksterminacja Polaków.</h2>
      {/* <div>
        <p>
          <span className="bold">1</span>
        </p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div> */}
      <div className="container">
        <img src={img} alt="..." />
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
      </div>
      <button className="btn" onClick={() => Toggle()}>
        Więcej
      </button>
      <Modal
        show={modal}
        close={Toggle}
        title="Zbrodnie niemieckie w Polsce (1939–1945)"
      >
        <p>
          Łącznie, w wyniku „Akcji Inteligencja”, zginęło ok. 100 tys. Polaków,
          spośród których 50 tys. zamordowano w ramach tzw. „akcji
          bezpośredniej” (tj. rozstrzelano), a kolejne 50 tys. wysłano do obozów
          koncentracyjnych, gdzie przeżył jedynie znikomy procent. Najbardziej
          ucierpiały ziemie włączone do Rzeszy, gdzie zamordowano ok. 40 tys.
          osób, a dalszych 20 tys. wysłano do obozów koncentracyjnych.
        </p>
        <br />
        <p>
          <em>
            pl.wikipedia.org/wiki/Zbrodnie_niemieckie_w_Polsce_(1939-1945)
          </em>
        </p>
      </Modal>
    </div>
  );
};

export default Best;
