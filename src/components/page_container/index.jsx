import React from 'react';
import './style.css';
import GoBackArrowIcon from '../../assets/icons/go-back-arrow.png'

const PageContainer = ({ goBackAction, child }) => {

    return (
        <div className="page-container-parent">
            {goBackAction !== undefined && <img src={GoBackArrowIcon} alt='go back action button' width={45} onClick={goBackAction}/>}
            <div className="page-container-child">
                {child}
            </div>
        </div>
    );
};

export default PageContainer;
