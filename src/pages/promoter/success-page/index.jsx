/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './style.css';
import PageContainer from '../../../components/page_container';
import { AiFillCheckCircle } from 'react-icons/ai';

function ConfirmationAccess() {
    // TODO -> Button to go back to stand selection
  return (
    <>
     <PageContainer hasLogo>
        <div style={{marginBottom:'40px'}}>
        <AiFillCheckCircle fill="#0097FA" style={{width:'350px', height:'350px'}}/>
        </div>
     </PageContainer>
    </>
  );
}

export default ConfirmationAccess;
