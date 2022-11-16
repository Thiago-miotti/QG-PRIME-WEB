/* eslint-disable jsx-a11y/alt-text */
import Logo from '../../../assets/logoPrimeVideoPreto.svg';
import ButtonPrimary from '../../../components/button_primary';
import './style.css';
import {useNavigate} from "react-router-dom";
import { BsFillPersonFill } from 'react-icons/bs';
import {Fab} from "@mui/material";


function UserLoginPage() {
  const navigate = useNavigate();
    return (
      <>
      <div className='container' style={{backgroundColor:'#0097FA'}}>
        <div className='container2'  style={{backgroundColor:'black'}}>
          <img src={Logo} width='200px' height='200px' alt='prime video logo' className='blue-logo-variation'/>
          <ButtonPrimary title='Iniciar Cadastro' onClick={() => navigate('/user/register') }/>
        </div>
        <div style={{position: 'absolute', right: '20px', bottom: '20px'}} onClick={() => navigate('/promoter/stands')}>
          <Fab size="medium" color="primary" aria-label="add">
            <BsFillPersonFill />
          </Fab>
        </div>

      </div>
      </>
    )
  }

  export default UserLoginPage;
