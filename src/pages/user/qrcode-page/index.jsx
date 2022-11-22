/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import QRCode from "react-qr-code";
import {Typography} from "@mui/material";
import ButtonPrimary from "../../../components/button_primary";
import './style.css';
import {useParams} from "react-router-dom";
import PrimeVideoLogo from "../../../assets/logoPrimeVideoPreto.svg";


function UserLoginPage() {
    let {id} = useParams()

    return (
        <>
            <div
                className="container"
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center",
                    backgroundColor: '#0097FA',
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "95vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        backgroundColor: 'black',
                        borderRadius: '0% 100% 0% 100% / 100% 8% 92% 0%',

                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            alignItems: "center",

                        }}
                    >
                        <div style={{
                            width: '350px',
                            textAlign: 'center',
                            marginBottom: '30px',
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            rowGap: '20px',
                            overflowY: 'hidden',
                            overflowX: 'hidden'

                        }}>

                            <Typography
                                variant="h6"
                                noWrap={true}
                                sx={{mt: 2, letterSpacing: "2px", fontWeight: "bold", color: 'white'}}
                            >
                                SUCESSO
                            </Typography>
                            <Typography
                                variant="h7"
                                align="center"
                                sx={{fontWeight: "bold", color: 'white'}}
                            >
                                SEU ACESSO AO QG AMAZON ESTÁ CONFIRMADO! APRESENTE ESSE QR CODE PARA INICIAR
                            </Typography>

                            <div
                                style={{
                                    width: "200px",
                                    height: '200px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white'
                                }}
                            >
                                <QRCode
                                    size={180}
                                    value={id}
                                    viewBox={`0 0 180 180`}
                                />
                            </div>
                            <Typography variant="h6"
                                        align="center"
                                        sx={{letterSpacing: "5px", fontWeight: "bold", color: '#0097FA'}}>COD: {id}
                            </Typography>
                        </div>

                        <div>
                            <ButtonPrimary title="RECONHECIMENTO FACIAL" onClick={()=>window.open('https://events.getsnappic.com/qr/mGYl6','_blank')} />
                            <img src={PrimeVideoLogo} alt='prime video logo' width="250px" height="130px"
                                 className="blue-logo-variation"/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLoginPage;
