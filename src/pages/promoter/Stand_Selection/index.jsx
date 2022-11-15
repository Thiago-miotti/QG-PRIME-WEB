/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logo from "../../../assets/logoPrimeVideoPreto.svg";
import ButtonPrimary from "../../../components/button_primary";
import './style.css';
import Stack from '@mui/material/Stack';
import PageContainer from '../../../components/page_container';


function Promoter_Stand_Selection() {
  return (
    <>
     <PageContainer>
            <Stack spacing={2} sx={{mb: 18}}>
                <ButtonPrimary title="CLAW MACHINE"/>
                <ButtonPrimary title="TABULEIRO"/>
                <ButtonPrimary title="PHOTO FREEZE" />
            </Stack>
            <img src={Logo} width="250px" height="200px" className="Logo_blue"/>
     </PageContainer>
    </>
  );
}

export default Promoter_Stand_Selection;
