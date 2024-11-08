import React from 'react';
//import { Link } from 'react-router-dom';
import GenderFilter from './GenderFilter';
import ColorFilter from './ColorFilter';
import { useDispatch } from 'react-redux';
import { setSortType } from '../actions/productActions';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSortChange = (sortType) => {
    dispatch(setSortType(sortType));
  }

  return (
    <div className="bg-white" style={{ width: '250px', minHeight: '100vh', padding: '10px' }}>
      {/* Sorting Options */}
      <h6 className="ps-3 my-3" style={{ color: '#400', fontSize: "14px" }}>
        SORT BY
      </h6>
      <div className="d-flex flex-column">
        <label>
          <input
            type="radio"
            name="sortOptions"
            onChange={() => handleSortChange('relevance')}
            defaultChecked
          />
          Relevance
        </label>
        <label>
          <input
            type="radio"
            name="sortOptions"
            onChange={() => handleSortChange('lowToHigh')}
          />
          Price: Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sortOptions"
            onChange={() => handleSortChange('highToLow')}
          />
          Price: High to Low
        </label>
      </div>

      <hr className="horizontal-line my-3" />

      {/* Filters Section */}
      <h6 className='ps-3 my-3' style={{ color: '#400', fontSize: "14px" }}>
        FILTERS
        <p style={{ color: '#777', fontSize: "10px" }}>100+ products</p>
      </h6>
      <hr className='horizontal-line' style={{ marginTop: "10px", maxWidth: "210px" }} />

      {/* Replace these components with your actual filtering components */}
      <GenderFilter />
      <ColorFilter />
    </div>
  );
};

export default Sidebar;
