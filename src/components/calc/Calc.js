import React from 'react';

import './styles.css';

export const Calc = ({ value }) => {
  return (
    <div className="calc-container">
      <div className="calc-value">
        <label className="lbl">CUOTA FIJA POR MES</label>
        <label className="val">${value}</label>
      </div>
      <div className="calc-btn">
        <button className="credit">OBTENÉ CREDITO</button>
        <button className="detail">VER DETALLE DE CUOTAS</button>
      </div>
    </div>
  );
};
