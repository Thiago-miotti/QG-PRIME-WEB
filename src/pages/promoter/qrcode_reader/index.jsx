import React, {useState} from 'react';
import PageContainer from "../../../components/page_container";
import ButtonPrimary from "../../../components/button_primary";

import {QrReader} from 'react-qr-reader';
import {Input, TextField} from "@mui/material";
import DarkInput from "../../../components/dark_input";

function QrCodeReaderPage() {
    const [data, setData] = useState('No result');
    return (
        <PageContainer goBackAction={() => console.log('oi')} hasLogo>
            <ButtonPrimary title="CLAW MACHINE"/>

            <div style={{width: '300px'}}>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }
                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{width: '100%'}}
                />
                <DarkInput type="text" placeholder="Código" />

            </div>


        </PageContainer>
    );
}

export default QrCodeReaderPage;
