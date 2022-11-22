import React, {useEffect, useState} from 'react';
import CustomizedSteppers from "../../../components/customized_stepper";
import './style.css'

import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import ButtonPrimary from "../../../components/button_primary";
import {List, ListItem, Checkbox} from "@mui/joy";
import {Done} from "@mui/icons-material";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {Alert, CircularProgress, Snackbar} from "@mui/material";

const QuestionsPage = () => {
    const questions = [
        {
            id: 1,
            description: 'Qual o seu gênero ?',
            type: 'single',
            answers: [
                {id: 1, description: 'Feminino', nextQuestion: 2},
                {id: 2, description: 'Masculino', nextQuestion: 2},
                {id: 3, description: 'Outros', nextQuestion: 2},
                {id: 4, description: 'Prefiro não dizer', nextQuestion: 2}
            ]
        },
        {
            id: 2,
            description: 'Quantos anos você tem ?',
            type: 'single',
            answers: [
                {id: 5, description: '18-24', nextQuestion: 3},
                {id: 6, description: '25-34', nextQuestion: 3},
                {id: 7, description: '35-44', nextQuestion: 3},
                {id: 8, description: '45-54', nextQuestion: 3},
                {id: 9, description: '55-64', nextQuestion: 3},
                {id: 10, description: '65+', nextQuestion: 3}]
        },
        {
            id: 3,
            description: 'Você assina o Prime Video ?',
            type: 'single',
            answers: [
                {id: 11, description: 'Sim', nextQuestion: 5},
                {id: 12, description: 'Não', nextQuestion: 4}
            ]
        },
        {
            id: 4,
            description: 'Assinale a opção que melhor define sua relação com o Prime Video.',
            type: 'single',
            answers: [
                {id: 13, description: 'Pretendo assinar Prime Video no próximo mês', nextQuestion: null},
                {id: 14, description: 'Pretendo assinar Prime Video nos próximos 3 meses', nextQuestion: null},
                {id: 15, description: 'Pretendo assinar Prime Video um dia', nextQuestion: null},
                {id: 16, description: 'Não pretendo assinar ', nextQuestion: null}
            ]
        }, {
            id: 5,
            description: 'Você já assistiu a algum dos programas/filmes/séries listados abaixo',
            type: 'multiple',
            answers: [
                {id: 17, description: 'O Senhor dos Anéis – Os Anéis de Poder', nextQuestion: null},
                {id: 18, description: 'Períféricos ', nextQuestion: null},
                {id: 19, description: 'Jack Ryan de Tom Clancy', nextQuestion: null},
                {id: 20, description: 'The Boys', nextQuestion: null},
                {id: 21, description: 'A Roda do Tempo', nextQuestion: null},
                {id: 22, description: 'Samaritano', nextQuestion: null},
                {id: 23, description: 'A Guerra do Amanhã ', nextQuestion: null},
                {id: 24, description: 'LOL: Se Rir, Já Era!', nextQuestion: null},
                {id: 25, description: 'NBA', nextQuestion: null},
                {id: 26, description: 'Hotel Transilvânia 4 – Transformonstrão', nextQuestion: null},
                {id: 27, description: 'Não assisti a nenhum dos conteúdos listado', nextQuestion: null},
            ]
        }]

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [currentStep, setCurrentStep] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [isUserAnswerRequestOnProgress, setIsUserAnswerRequestOnProgress] = useState(false);
    const [alert, setAlert] = useState({showAlert: false, message: '', severity: 'error'})

    const navigate = useNavigate();
    let { id } = useParams();

    const handleNextQuestion = async () => {
        if(userAnswer.length === 0) return;

        setIsUserAnswerRequestOnProgress(true);
        const response = await axios.post('https://api-qg-amazon.azurewebsites.net/api/api-user-answer', {userId: id, answersIds: userAnswer})

        if (response && response.status === 200) {
            const nextQuestion = currentQuestion?.answers.find(answer => answer.id === userAnswer[0])?.nextQuestion;
            console.log("console", nextQuestion)
            if(!nextQuestion){
                navigate(`/user/qrcode/${id}`);
            } else {
                setUserAnswer([]);
                setCurrentStep(currentStep + 1)
                if(nextQuestion === 5) setCurrentQuestion(questions[4]);
                else setCurrentQuestion(questions[currentStep + 1]);
            }
        } else {
            setAlert({
                showAlert: true,
                message: 'Parece que houve algum erro interno, por favor, contate nosso suporte.',
                severity: 'error'
            })
        }

        setIsUserAnswerRequestOnProgress(false);
    }

    return (
        <div className="questions-container">
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
            <div className="questions-container-child">
                <div className="questions-container-body">
                    <CustomizedSteppers steps={[1, 2, 3, 4]} activeStep={currentStep}/>
                    <h3 style={{color: '#fff', fontWeight: 'bold'}}>{currentQuestion.description}</h3>
                    <Box className='questions-container-body-answers' >
                        {currentQuestion?.type === 'single' ? (
                            <RadioGroup
                                aria-labelledby="storage-label"
                                defaultValue="Sim"
                                size="lg"
                                sx={{gap: 1.5}}
                            >
                                {currentQuestion?.answers.map((answer) => (
                                    <Sheet key={answer.id} sx={{p: 2, borderRadius: 'md'}}>
                                        <Radio
                                            label={answer.description}
                                            overlay
                                            disableIcon
                                            value={answer.id}
                                            onChange={(e) => setUserAnswer([+e.target.value])}
                                            componentsProps={{
                                                label: ({checked}) => ({
                                                    sx: {
                                                        fontWeight: 'lg',
                                                        fontSize: 'md',
                                                        color: '#ffff',
                                                    },
                                                }),
                                                action: ({checked}) => ({
                                                    sx: () => ({
                                                        backgroundColor: '#22272E',
                                                        ...(checked && {
                                                            '--variant-borderWidth': '2px',
                                                            '&&': {
                                                                borderColor: '#0097FA',
                                                            },
                                                        }),
                                                    }),
                                                }),
                                            }}
                                        />
                                    </Sheet>
                                ))}
                            </RadioGroup>
                        ) : (
                                <List
                                    row
                                    wrap
                                    sx={{
                                        '--List-gap': '10px',
                                        '--List-item-radius': '20px',
                                        '--List-item-minHeight': '40px',
                                    }}
                                >
                                    {currentQuestion?.answers.map(
                                        (answer, index) => (
                                            <ListItem key={answer.id} sx={{backgroundColor: '#22272E'}}
                                            >
                                                {userAnswer.includes(answer.id) && (
                                                    <Done
                                                        fontSize="md"
                                                        color="primary"
                                                        sx={{ml: -0.5, mr: 0.5, zIndex: 2, pointerEvents: 'none'}}
                                                    />
                                                )}
                                                <Checkbox
                                                    size="lg"
                                                    disableIcon
                                                    overlay
                                                    label={answer.description}
                                                    checked={userAnswer.includes(answer.id)}
                                                    sx={{color: '#fff'}}
                                                    variant={userAnswer.includes(answer) ? 'soft' : 'outlined'}
                                                    onChange={(event) => {
                                                        if (event.target.checked) {
                                                            setUserAnswer((val) => [...val, answer.id]);
                                                        } else {
                                                            setUserAnswer((val) => val.filter((text) => text !== answer.id));
                                                        }
                                                    }}
                                                    componentsProps={{
                                                        action: ({checked}) => ({
                                                            sx: checked
                                                                ? {
                                                                    border: '1px solid',
                                                                    borderColor: 'primary.500',
                                                                }
                                                                : {},
                                                        }),
                                                    }}
                                                />
                                            </ListItem>
                                        ),
                                    )}
                                </List>
                        )}
                    </Box>
                    <div className='questions-container-next-button-container'>
                        <ButtonPrimary title={isUserAnswerRequestOnProgress ? <CircularProgress /> : 'Próxima'} onClick={handleNextQuestion}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsPage;
