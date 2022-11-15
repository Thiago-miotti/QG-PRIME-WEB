import React from 'react';
import './style.css';
import GoBackArrowIcon from '../../assets/icons/go-back-arrow.png'
import PrimeVideoLogo from '../../assets/logoPrimeVideoPreto.svg';

const PageContainer = ({ goBackAction, hasLogo, children }) => {
    return (
        <div className="page-container-parent">
            <div className='page-container-icon-container'>
                {goBackAction !== undefined && <img src={GoBackArrowIcon} alt='go back action button' width={45} onClick={goBackAction}/>}
            </div>
            <div className="page-container-child">
                {children}

                {hasLogo && <img src={PrimeVideoLogo} alt='prime video logo' width="250px" height="200px" className="blue-logo-variation"/>}
            </div>
        </div>
    );
};

export default PageContainer;
