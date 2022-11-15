import React from 'react';
import './style.css'

const DarkInput = ({ type, placeholder}) => {
    return (
        <input className='dark-input' type={type} placeholder={placeholder} />
    );
};

export default DarkInput;
