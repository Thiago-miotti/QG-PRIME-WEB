/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import QRCode from "react-qr-code";
import { Typography } from "@mui/material";
import Logo from "../../../assets/logoPrimeVideoBranco.svg";
import ButtonPrimary from "../../../components/button_primary";
import './style.css';


function UserLoginPage() {
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
          backgroundColor:'#0097FA'
        }}
      >
        <div
          style={{
            width: "100%",
            height: "95vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:'black',
            borderRadius:'0% 100% 0% 100% / 100% 8% 92% 0%',
          }}
        >
          <Typography
            variant="h6"
            noWrap={true}
            sx={{ mb: 2, mt:2, letterSpacing: "2px", fontWeight: "bold" , color:'white'}}
          >
            FULANO
          </Typography>
          <div style={{width:'250px', textAlign:'center', marginBottom:'30px'}}>
          <Typography
            variant="h7"
            align="center"
            sx={{ mb: 4, fontWeight: "bold", color:'white' }}
          >
            SEU ACESSO AO QG AMAZON ESTÁ CONFIRMADO! APRESENTE ESSE QR CODE PARA INICIAR
          </Typography>
          </div>
          
          <div
            style={{
              width: "200px",
              height:'200px',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:'white'
            }}
          >
            <QRCode
              size={180}
              value={"ola mundo"}
              viewBox={`0 0 180 180`}
            />
          </div>
          <Typography variant="h6"
            align="center"
            sx={{letterSpacing: "5px", fontWeight: "bold", mb:4, color:'#0097FA'}}>COD: 234</Typography>
            <ButtonPrimary title="RECONHECIMENTO FACIAL" />
          <img src={Logo} width="250px" height="200px"/>
        </div>
      </div>
    </>
  );
}

export default UserLoginPage;
