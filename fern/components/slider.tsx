import React, { useState } from 'react';

export const CustomSlider = ({ min = 0, max = 100, step = 1, defaultValue = 50 }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <div className="slider-value">{value}</div>
    </div>
  );
};
