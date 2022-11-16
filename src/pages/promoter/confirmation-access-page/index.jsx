/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from "react";
import ButtonPrimary from "../../../components/button_primary";
import './style.css';
import {Typography} from "@mui/material";
import PageContainer from '../../../components/page_container';
import Stack from '@mui/material/Stack';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


function ConfirmationAccess() {
    const navigate = useNavigate();
    const { userId, standId } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            const response = await axios.get(`https://api-qg-prime.azurewebsites.net/api/user/${userId}`);

            if (response && response.status === 200) {
                setUser(response.data);
            }
            // TODO -> Handle when the request fails
        })()
    }, [userId])

    const handleUserCheckIn = async () => {

        // TODO -> Handle if userId or standId is null
        const response = await axios.put('https://api-qg-prime.azurewebsites.net/api/api-user-check-in', {
            userId,
            activationStandId: standId
        })

        if (response && response.status === 200) {
            navigate('/promoter/success')
        }
    }

    return (
        <>
            <PageContainer hasLogo goBackAction={() => console.log('oi')}>
                <Stack spacing={3} sx={{mb: 20}}>
                    <Typography variant="h4"
                                sx={{color: 'white'}}>{`${user.name?.toUpperCase()} ${user.lastname?.toUpperCase()}`}</Typography>
                    <ButtonPrimary title="CONFIRMAR ACESSO" onClick={handleUserCheckIn}/>
                </Stack>
            </PageContainer>
        </>
    );
}

export default ConfirmationAccess;
