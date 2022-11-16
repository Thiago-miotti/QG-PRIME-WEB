/* eslint-disable jsx-a11y/alt-text */
import Logo from '../../../assets/logoPrimeVideoPreto.svg';
import ButtonPrimary from '../../../components/button_primary';
import './style.css';
import {useNavigate} from "react-router-dom";

function UserLoginPage() {
  const navigate = useNavigate();
    return (
      <>
      <div className='container' style={{backgroundColor:'#0097FA'}}>
        <div className='container2'  style={{backgroundColor:'white'}}>
          <img src={Logo} width='200px' height='200px' alt='prime video logo'/>
          <ButtonPrimary title='Iniciar Cadastro' onClick={() => navigate('/user/register') }/>
        </div>
      </div>
      </>

    )
  }

  export default UserLoginPage;
