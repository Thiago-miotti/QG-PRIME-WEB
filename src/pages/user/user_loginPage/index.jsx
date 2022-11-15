/* eslint-disable jsx-a11y/alt-text */
import Logo from '../../../assets/logoPrimeVideoPreto.svg';
import ButtonPrimary from '../../../components/button_primary';
import './style.css';

function UserLoginPage() {

    return (
      <>
      <div className='container' style={{backgroundColor:'#0097FA'}}>
        <div className='container2'  style={{backgroundColor:'white'}}>
          <img src={Logo} width='200px' height='200px'/>
          <ButtonPrimary title='Iniciar Cadastro'/>
        </div>
      </div>
      </>
      
    )
  }
  
  export default UserLoginPage;