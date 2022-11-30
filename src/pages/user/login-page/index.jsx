/* eslint-disable jsx-a11y/alt-text */
import Logo from '../../../assets/logoPrimeVideoPreto.svg';
import ButtonPrimary from '../../../components/button_primary';
import './style.css';
import {useNavigate} from "react-router-dom";
import { BsFillPersonFill } from 'react-icons/bs';
import {Alert, CircularProgress, Fab, Snackbar} from "@mui/material";
import axios from "axios";
import React, {useState} from "react";
import PrimeVideoLogo from "../../../assets/logoPrimeVideoPreto.svg";


function UserLoginPage() {
  const navigate = useNavigate();

  const [isUserCreateRequestOnProgress, setIsUserCreateRequestOnProgress] = useState(false);
  const [alert, setAlert] = useState({showAlert: false, message: '', severity: 'error'})

  const handleUserCreate = async () => {
    setIsUserCreateRequestOnProgress(true);
    const response = await axios.post('https://api-qg-amazon.azurewebsites.net/api/api-user-register')

    if (response && response.status === 200) {
      navigate(`/user/${response.data.id}/questions`);
    } else {
      setAlert({
        showAlert: true,
        message: 'Parece que houve algum erro interno, por favor, contate nosso suporte.',
        severity: 'error'
      })
    }

    setIsUserCreateRequestOnProgress(false);
  }

    return (
      <>
      <div className='container' style={{backgroundColor:'#0097FA'}}>
        <Snackbar
            open={alert.showAlert}
            autoHideDuration={4000}
            onClose={() => setAlert({...alert, showAlert: false})}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        >
          <Alert severity={alert.severity}>
            {alert.message}
          </Alert>
        </Snackbar>

        <div className='container2'  style={{backgroundColor:'black', rowGap: '20px'}}>
          <img src={Logo} width='200px' height='200px' alt='prime video logo' className='blue-logo-variation'/>
          <ButtonPrimary title={isUserCreateRequestOnProgress ? <CircularProgress/> : 'Iniciar Cadastro'} disabled={isUserCreateRequestOnProgress} onClick={handleUserCreate}/>

          <ButtonPrimary style={{padding: '5px'}} title="Reconhecimento facial" onClick={()=>window.open('https://events.getsnappic.com/qr/mGYl6','_blank')} />
        </div>


        <div>

        </div>

      </div>
      </>
    )
  }

  export default UserLoginPage;
