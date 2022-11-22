/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import ButtonPrimary from "../../../components/button_primary";
import Logo from "../../../assets/logoPrimeVideoPreto.svg";
import "./style.css";
import DarkInput from "../../../components/dark_input";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {
    Alert, Button,
    Checkbox,
    CircularProgress,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Snackbar
} from "@mui/material";

function UserFormPage() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

    const [showTermsModal, setShowTermsModal] = useState(false);

    const [isRegisterRequestOnProgress, setIsRegisterRequestOnProgress] = useState(false);

    const [alert, setAlert] = useState({showAlert: false, message: '', severity: 'error'})

    const navigate = useNavigate();

    const handleSubmit = async () => {

        if (!name || !lastname || !email || !phone) {
            setAlert({showAlert: true, message: 'Por favor, preencha todos os campos obrigatórios.', severity: 'error'})
            return;
        }

        if (!termsChecked) {
            setAlert({showAlert: true, message: 'É necessário concordar com os termos de uso.', severity: 'error'})
            return;
        }

        setIsRegisterRequestOnProgress(true);
        const response = await axios.post('https://api-qg-amazon.azurewebsites.net/api/api-user-register', {
            name,
            lastname,
            email,
            cellphone: phone
        })

        if (response && response.status === 200) {
            navigate(`/user/qrcode/${response.data.id}/${name}-${lastname}`);
        } else {
            setAlert({
                showAlert: true,
                message: 'Parece que houve algum erro interno, por favor, contate nosso suporte.',
                severity: 'error'
            })
        }

        setIsRegisterRequestOnProgress(false);
    }

    const maskPhone = (v) => {
        //maxlength: 15
        const r = v.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2');

        if (r.length > 13) return r.replace(/(\d{5})(\d)/, '$1-$2');

        return r.replace(/(\d{4})(\d)/, '$1-$2');
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

                <div className="user-form-parent-container">
                    <div className="user-form-child-form-container">
                        <div className="user-form-input-container">
                            <DarkInput type="text" placeholder="NOME" value={name}
                                       onChange={(e) => setName(e.target.value)}/>
                            <DarkInput type="text" placeholder="SOBRENOME" value={lastname}
                                       onChange={(e) => setLastname(e.target.value)}/>
                            <DarkInput type="email" placeholder="E-MAIL" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            <DarkInput type="tel" placeholder="TELEFONE" value={phone}
                                       onChange={(e) => setPhone(maskPhone(e.target.value))}/>

                            <div className='user-form-input-container-checkbox'>
                                <Checkbox sx={{color: '#fff'}} value={termsChecked}
                                          onChange={() => setTermsChecked(!termsChecked)}/>
                                <p style={{color: '#fff', fontSize: '15px'}}>Eu li e concordo com os <a
                                    onClick={() => setShowTermsModal(!showTermsModal)}>termos de uso e condições</a></p>
                            </div>
                        </div>
                        <div>
                            <ButtonPrimary disabled={isRegisterRequestOnProgress} title={isRegisterRequestOnProgress ?
                                <CircularProgress/> : "Finalizar Cadastro"} onClick={handleSubmit}/>
                        </div>
                    </div>

                </div>
            </div>


            <Dialog
                open={showTermsModal}
                onClose={() => setShowTermsModal(!showTermsModal)}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Termos de uso</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        {[...new Array(50)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowTermsModal(!showTermsModal)}>Cancelar</Button>
                    <Button onClick={() => {
                        setTermsChecked(true);
                        setShowTermsModal(!showTermsModal);
                    }}>Aceitar</Button>
                </DialogActions>
            </Dialog>
            }
        </>
    );
}

export default UserFormPage;
