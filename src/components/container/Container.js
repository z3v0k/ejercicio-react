import React, { useEffect, useState } from 'react';
import { SliderAmount } from '../slider';
import { Title } from '../title';
import { Calc } from '../calc';

import './styles.css';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const Container = () => {
  const [amount, setAmount] = useState();
  const [limit, setLimit] = useState();
  const [calc, setCalc] = useState();

  useEffect(() => {
    const value = (amount / limit).toFixed(2);
    setCalc(numberWithCommas(value));
  }, [amount, limit]);

  return (
    <div className="container">
      <div className="box">
        <Title />
        <SliderAmount
          min={5000}
          max={50000}
          simbol="$"
          label="MONTO TOTAL"
          onChange={setAmount}
        />
        <SliderAmount min={3} max={24} label="PLAZO" onChange={setLimit} />
        <Calc value={calc} />
      </div>
    </div>
  );
};
