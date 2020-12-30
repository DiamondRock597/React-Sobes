import React from "react";

import "./House.css";

const House = (props) => {
  return (
    <div className="home" onClick={() => props.openM(props.id)}>
      <div className="home__img">
        <img src={props.src} width="349" height="200" alt={props.kind} />
      </div>
      <div className="home__text">
        {props.kind === "townhouse" ? (
          <p>
            Таунхаус в посёлке '{props.settlementName}', {props.mkadDistance}км
          </p>
        ) : (
          <p>
            Дом в посёлке '{props.settlementName}', {props.mkadDistance}км
          </p>
        )}
        <p className="price">
          ${props.price} {!props.isRent ? "" : " - стоимость аренды"}
        </p>
        <div className="home__info">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
              <path d="M14.86.096H1.651C.794.096.097.786.097 1.634v13.07c0 .847.697 1.537 1.554 1.537H14.86c.857 0 1.554-.69 1.554-1.538V1.633c0-.847-.697-1.537-1.554-1.537zm.657 10.597L7.822 7.18 10.498.955h5.02v9.738zM9.467.977L3.139 15.323H.949L1.029.977h8.438zm-5.29 14.382l3.246-7.384 8.088 3.577v3.807H4.177z"></path>
            </svg>
            {props.hundred} сот
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18">
              <path d="M16.562 7.145v9.08h-3.84v-6.58a.618.618 0 0 0-.62-.613H7.447a.618.618 0 0 0-.62.614v6.579H3.125v-9.08H2.054l7.747-6.118 7.727 6.118h-.966zm-8.773 8.991V9.973h4.016v6.163H7.79zM10.16.134a.625.625 0 0 0-.772 0L1.268 6.597c-.15.117-.604.928 0 1.332.22.147 1.063.143 1.063.143v8.295c0 .65.42.802.763.802H16.8c.343 0 .652-.32.652-.66 0 0 .02-8.5 0-8.504.472 0 .902-.076.902-.076.772-.536.077-1.302-.072-1.419L10.16.134z"></path>
            </svg>
            {props.area}м<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default House;
