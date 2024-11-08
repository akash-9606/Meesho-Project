import React from 'react';
import { useDispatch } from 'react-redux';
import { setColorFilter } from '../actions/productActions';

const ColorFilter = () => {
  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    dispatch(setColorFilter({ colors: color }));
  };

  return (
    <div className="color-filter">
      <div className="form-check mb-2">
        <input
          id="red"
          type="checkbox"
          className="form-check-input"
          onChange={() => handleColorChange('Red')}
        />
        <label htmlFor="red" className="form-check-label">Red</label>
      </div>
      <h2 style={{ color: '#333', fontSize: "13px" }}>Color</h2>
      <div className="form-check mb-2">
        <label htmlFor="blue" className="form-check-label">Blue</label>
        <input
          className="form-check-input"
          id="blue"
          type="checkbox"
          onChange={() => handleColorChange('Blue')}
        />
      </div>
      <div className="form-check mb-2">
        <label className="form-check-label" htmlFor="green">Green</label>
        <input
          onChange={() => handleColorChange('Green')}
          className="form-check-input"
          id="green"
          type="checkbox"
        />
      </div>
      <div className="form-check mb-2">
        <input
          onChange={() => handleColorChange('Black')}
          className="form-check-input"
          id="black"
          type="checkbox"
        />
        <label className="form-check-label" htmlFor="black">Black</label>
      </div>
      <div className="form-check mb-2">
        <label htmlFor="white" className="form-check-label">White</label>
        <input
          id="white"
          className="form-check-input"
          type="checkbox"
          onChange={() => handleColorChange('White')}
        />
      </div>
    </div>
  );
};

export default ColorFilter;
