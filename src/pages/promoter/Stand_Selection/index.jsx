/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ButtonPrimary from "../../../components/button_primary";
import './style.css';
import Stack from '@mui/material/Stack';
import PageContainer from '../../../components/page_container';

function Promoter_Stand_Selection() {
  return (
    <>
     <PageContainer hasLogo>
            <Stack spacing={2} sx={{mb: 20}}>
                <ButtonPrimary title="CLAW MACHINE"/>
                <ButtonPrimary title="TABULEIRO"/>
                <ButtonPrimary title="PHOTO FREEZE" />
            </Stack>
     </PageContainer>
    </>
  );
}

export default Promoter_Stand_Selection;
