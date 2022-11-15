/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import ButtonPrimary from "../../../components/button_primary";
import Logo from "../../../assets/logoPrimeVideoPreto.svg";
import "./style.css";

function UserFormPage() {
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
        <img src={Logo} width="250px" height="150px" />
        <div className="container_btn-form">
          <div className="form">
            <form className="login-form">
                <input type="text" placeholder="NOME" />
                <input type="text" placeholder="SOBRENOME" />
                <input type="email" placeholder="E-MAIL" />
                <input type="tel" placeholder="TELEFONE" />
            </form>
            </div>
          <div className="btn-register">
            <ButtonPrimary title="Finalizar Cadastro" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserFormPage;
