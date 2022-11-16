/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import './style.css';
import PageContainer from '../../../components/page_container';
import { AiFillCheckCircle } from 'react-icons/ai';
import {useNavigate} from "react-router-dom";
import {Alert, Snackbar} from "@mui/material";

function ConfirmationAccess() {
    const navigate = useNavigate();

    const [showAlert, setShowAlert] = useState(true);

  return (
    <>
     <PageContainer hasLogo goBackAction={() => navigate('/promoter/stands')}>
         <Snackbar
             open={showAlert}
             autoHideDuration={4000}
             onClose={() => setShowAlert(false)}
             anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
         >
             <Alert severity='success'>
                 Check-In realizado com sucesso !
             </Alert>
         </Snackbar>

        <div style={{marginBottom:'40px'}}>
            <AiFillCheckCircle fill="#0097FA" style={{width:'350px', height:'350px'}}/>
        </div>
     </PageContainer>
    </>
  );
}

export default ConfirmationAccess;
