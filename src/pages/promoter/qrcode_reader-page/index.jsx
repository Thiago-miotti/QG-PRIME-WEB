import React, {useState} from 'react';
import PageContainer from "../../../components/page_container";
import ButtonPrimary from "../../../components/button_primary";

import {QrReader} from 'react-qr-reader';
import DarkInput from "../../../components/dark_input";
import {useNavigate, useParams} from "react-router-dom";

function QrCodeReaderPage() {
    const [data, setData] = useState('No result');
    const [manualCode, setManualCode] = useState('');

    const { standId, standName } = useParams();
    const navigate = useNavigate();

    return (
        <PageContainer goBackAction={() => navigate(-1)} hasLogo>
            <ButtonPrimary title={standName}/>

            <div style={{width: '300px', display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
                {/*TODO -> Handle when the component is not ready*/}
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                            navigate(`promoter/confirmation/${result?.text}/${standId}`)
                        }
                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{width: '100%'}}
                />
                <DarkInput type="text" placeholder="Código" value={manualCode} onChange={(e) => setManualCode(e.target.value)}/>

                {/*TODO -> Align this button & Handle if input is empty */}
                <ButtonPrimary title='Confirmar' onClick={() => navigate(`/promoter/confirmation/${manualCode}/${standId}`)}/>

            </div>


        </PageContainer>
    );
}

export default QrCodeReaderPage;
