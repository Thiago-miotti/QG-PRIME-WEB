/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from "react";
import ButtonPrimary from "../../../components/button_primary";
import './style.css';
import Stack from '@mui/material/Stack';
import PageContainer from '../../../components/page_container';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Promoter_Stand_Selection() {
    const navigate = useNavigate();
    const [stands, setStands] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://api-qg-prime.azurewebsites.net/api/api-fetch-all-stands')

            if(response && response.status === 200){
                setStands(response.data);
            }

            // TODO -> Handle when the request fails
        })()
    }, [])

    return (
        <>
            <PageContainer hasLogo>
                <Stack spacing={2} sx={{mb: 20}}>
                    {stands?.length && stands.map(stand => (
                        <ButtonPrimary title={stand.name} onClick={() => navigate(`/promoter/reader/${stand.id}/${stand.name}`)} />
                    ))}
                    {/* TODO -> Handle when there is no stands */}
                </Stack>
            </PageContainer>
        </>
    );
}

export default Promoter_Stand_Selection;
