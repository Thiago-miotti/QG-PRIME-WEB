/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ButtonPrimary from "../../../components/button_primary";
import './style.css';
import { Typography } from "@mui/material";
import PageContainer from '../../../components/page_container';
import Stack from '@mui/material/Stack';


function ConfirmationAccess() {
  return (
    <>
     <PageContainer hasLogo  goBackAction={() => console.log('oi')}>
        <Stack spacing={3} sx={{mb:20}}>
            <Typography variant="h4" sx={{color:'white'}}>JOHN SAMPLE</Typography>
            <ButtonPrimary title="CONFIRMAR ACESSO" />
        </Stack>
     </PageContainer>
    </>
  );
}

export default ConfirmationAccess;
