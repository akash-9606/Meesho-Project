
import React from 'react';
import { useDispatch } from 'react-redux';
import { setGenderFilter } from '../actions/productActions';

const GenderFilter = () => {
    const dispatch = useDispatch();

    const handleGenderChange = (gender) => {
        dispatch(setGenderFilter({ gender }));
    };

    return (
        <div className="gender-filter">
            <h6 className="ps-3" style={{ fontSize: "13px", color: '#333' }}>Gender</h6>
            <div className="ps-3">
                {/* Checkbox Items */}
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="men" onChange={() => handleGenderChange('Men')} />
                    <label className="form-check-label" htmlFor="men">Men</label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="women" onChange={() => handleGenderChange('Women')} />
                    <label className="form-check-label" htmlFor="women">Women</label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="boy" onChange={() => handleGenderChange('Boy')} />
                    <label className="form-check-label" htmlFor="boy">Boy</label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="girl" onChange={() => handleGenderChange('Girl')} />
                    <label className="form-check-label" htmlFor="girl">Girl</label>
                </div>
            </div>
            <hr className="horizontal-line" style={{ marginTop: "10px", maxWidth: "210px", marginLeft: '15px', borderBottom: '1px solid #ddd' }} />
        </div>
    );
};

export default GenderFilter;

