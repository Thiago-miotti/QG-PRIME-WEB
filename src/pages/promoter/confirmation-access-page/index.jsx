/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from "react";
import ButtonPrimary from "../../../components/button_primary";
import './style.css';
import {Alert, Box, CircularProgress, Snackbar, Typography} from "@mui/material";
import PageContainer from '../../../components/page_container';
import Stack from '@mui/material/Stack';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


function ConfirmationAccess() {
    const navigate = useNavigate();
    const { userId, standId } = useParams();

    const [user, setUser] = useState({});
    const [alert, setAlert] = useState({ showAlert: false, message: '', severity: 'error'})
    const [isUserRequestOnProgress, setIsUserRequestOnProgress] = useState(false);
    const [isCheckinRequestOnProgress, setIsCheckinRequestOnProgress] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //         setIsUserRequestOnProgress(true);
    //
    //         const response = await axios.get(`https://api-qg-prime.azurewebsites.net/api/user/${userId}`);
    //
    //         if (response && response.status === 200) {
    //             setUser(response.data);
    //         } else {
    //             setAlert({ showAlert: true, message: 'Parece que houve algum erro interno, por favor, contate nosso suporte.', severity: 'error' })
    //         }
    //         setIsUserRequestOnProgress(false);
    //
    //     })()
    // }, [userId])

    const handleUserCheckIn = async () => {

        if(!standId || !userId){
            setAlert({ showAlert: true, message: 'ID do usuário ou ID da atração são obrigatórios.', severity: 'error' })
            return;
        }

        setIsCheckinRequestOnProgress(true);

        const response = await axios.put('https://api-qg-prime.azurewebsites.net/api/api-user-check-in', {
            userId,
            activationStandId: standId
        })

        if (response && response.status === 200) {
            navigate('/promoter/success')
        } else {
            setAlert({ showAlert: true, message: 'Parece que houve algum erro interno, por favor, contate nosso suporte.', severity: 'error' })
        }

        setIsCheckinRequestOnProgress(false);
    }

    return (
        <>
            <PageContainer hasLogo goBackAction={() => navigate(-1)}>
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

                <Stack spacing={3} sx={{mb: 20, display: 'flex', alignItems: 'center'}}>
                    {isUserRequestOnProgress ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', overflowX: 'hidden' }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Typography variant="h4"
                                    sx={{color: 'white'}}>Cód: {userId}</Typography>
                    )}

                    <ButtonPrimary title={isCheckinRequestOnProgress ? <CircularProgress /> : "CONFIRMAR ACESSO"} onClick={handleUserCheckIn}/>
                </Stack>
            </PageContainer>
        </>
    );
}

export default ConfirmationAccess;
