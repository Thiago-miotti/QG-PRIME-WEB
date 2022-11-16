/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ButtonPrimary from "../../../components/button_primary";
import Logo from "../../../assets/logoPrimeVideoPreto.svg";
import "./style.css";
import DarkInput from "../../../components/dark_input";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function UserFormPage() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const response = await axios.post('https://api-qg-prime.azurewebsites.net/api/api-user-register', {
            name,
            lastname,
            email,
            cellphone: phone
        })

        if(response && response.status === 200 ){
            navigate(`/user/qrcode/${response.data.id}/${name}${lastname}`);
        }

        // TODO -> Handle if request fail
    }

    return (
        <>
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
                <div className="user-form-parent-container">
                    <div className="user-form-child-form-container">
                        <DarkInput type="text" placeholder="NOME" value={name} onChange={(e) => setName(e.target.value)}/>
                        <DarkInput type="text" placeholder="SOBRENOME" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                        <DarkInput type="email" placeholder="E-MAIL" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <DarkInput type="tel" placeholder="TELEFONE" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <ButtonPrimary title="Finalizar Cadastro" onClick={handleSubmit}/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UserFormPage;
