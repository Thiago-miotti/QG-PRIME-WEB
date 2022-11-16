/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from "react";
import ButtonPrimary from "../../../components/button_primary";
import './style.css';
import Stack from '@mui/material/Stack';
import PageContainer from '../../../components/page_container';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Alert, Box, CircularProgress, Snackbar} from "@mui/material";

function Promoter_Stand_Selection() {
    const navigate = useNavigate();
    const [stands, setStands] = useState([]);
    const [alert, setAlert] = useState({ showAlert: false, message: '', severity: 'error'})
    const [isStandRequestOnProgress, setIsStandRequestOnProgress] = useState(false);


    useEffect(() => {
        (async () => {

            setIsStandRequestOnProgress(true);
            const response = await axios.get('https://api-qg-prime.azurewebsites.net/api/api-fetch-all-stands')

            if(response && response.status === 200){
                setStands(response.data);
            } else {
                setAlert({ showAlert: true, message: 'Parece que houve algum erro interno, por favor, contate nosso suporte.', severity: 'error' })
            }

            setIsStandRequestOnProgress(false);
        })()
    }, [])

    return (
        <>
            <PageContainer hasLogo>
                <Snackbar
                    open={alert.showAlert}
                    autoHideDuration={4000}
                    onClose={() => setAlert({ ...alert, showAlert: false})}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert severity={alert.severity}>
                        {alert.message}
                    </Alert>
                </Snackbar>
                <Stack spacing={2} sx={{mb: 20}}>
                    {stands?.length && stands.map(stand => (
                        <ButtonPrimary title={stand.name} onClick={() => navigate(`/promoter/reader/${stand.id}/${stand.name}`)} />
                    ))}
                    {isStandRequestOnProgress && (
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    )}
                </Stack>
            </PageContainer>
        </>
    );
}

export default Promoter_Stand_Selection;
