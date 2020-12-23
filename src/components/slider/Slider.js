import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './styles.css';

export const SliderAmount = ({ min, max, simbol, label, onChange }) => {
  const [amount, setAmount] = useState(min);

  useEffect(() => {
    onChange(amount);
  }, [amount, onChange]);

  const onChangeSlider = (e) => setAmount(e);

  const onChangeInput = (e) => {
    const value = e.target.value;
    setAmount(value > max ? max : value);
  };

  const onBlurValue = (e) => {
    const value = e.target.value;
    setAmount(value < min ? min : value);
  };

  return (
    <>
      <div className="slider-amount-container">
        <div className="slider-amount-header">
          <label>{label}</label>
          <span>
            {simbol}
            <input
              type="number"
              value={amount}
              min={min}
              max={max}
              onChange={onChangeInput}
              className="texbox"
              height="300"
              onBlur={onBlurValue}
            />
          </span>
        </div>
        <div className="slider-amount-control">
          <Slider
            onChange={onChangeSlider}
            min={min}
            max={max}
            value={amount}
          />
        </div>
        <div className="slider-amount-footer">
          <label>
            {simbol}
            {min}
          </label>
          <label>
            {simbol}
            {max}
          </label>
        </div>
      </div>
    </>
  );
};
