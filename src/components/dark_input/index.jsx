import React from 'react';
import './style.css'

const DarkInput = ({ type, placeholder, value, onChange}) => {
    return (
        <input className='dark-input' type={type} placeholder={placeholder} value={value} onChange={onChange} />
    );
};

export default DarkInput;
