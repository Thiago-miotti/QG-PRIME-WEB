/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ButtonPrimary from "../../../components/button_primary";
import Logo from "../../../assets/logoPrimeVideoPreto.svg";
import "./style.css";
import DarkInput from "../../../components/dark_input";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Alert, AlertTitle, CircularProgress, Snackbar} from "@mui/material";

function UserFormPage() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [isRegisterRequestOnProgress, SetIsRegisterRequestOnProgress] = useState(false);

    const [alert, setAlert] = useState({ showAlert: false, message: '', severity: 'error'})

    const navigate = useNavigate();

    const handleSubmit = async () => {

        if(!name || !lastname || !email || !phone) {
            setAlert({ showAlert: true, message: 'Por favor, preencha todos os campos obrigatórios.', severity: 'error' })
            return;
        }

        SetIsRegisterRequestOnProgress(true);
        const response = await axios.post('https://api-qg-prime.azurewebsites.net/api/api-user-register', {
            name,
            lastname,
            email,
            cellphone: phone
        })

        if(response && response.status === 200 ){
            navigate(`/user/qrcode/${response.data.id}/${name}-${lastname}`);
        } else {
            setAlert({ showAlert: true, message: 'Parece que houve algum erro interno, por favor, contate nosso suporte.', severity: 'error' })
        }

        SetIsRegisterRequestOnProgress(false);
    }

    return (
        <>
            {/*<Alert severity="error">Parece que houve algum erro interno, por favor, contate nosso suporte.</Alert>*/}
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: "#0097FA",
                }}
            >

                <img src={Logo} width="250px" height="150px" alt='logo prime video'/>

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

                <div className="user-form-parent-container">
                    <div className="user-form-child-form-container">
                        <DarkInput type="text" placeholder="NOME" value={name} onChange={(e) => setName(e.target.value)}/>
                        <DarkInput type="text" placeholder="SOBRENOME" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                        <DarkInput type="email" placeholder="E-MAIL" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <DarkInput type="tel" placeholder="TELEFONE" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <ButtonPrimary disabled={isRegisterRequestOnProgress} title={isRegisterRequestOnProgress ? <CircularProgress /> : "Finalizar Cadastro"} onClick={handleSubmit}/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UserFormPage;
