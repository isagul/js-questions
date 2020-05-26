import React, {useContext, useEffect, useState} from 'react';
import {Store} from '../../store';
import { Progress, Modal } from 'antd';
import {SET_QUESTIONS} from '../../constants/actions';
import {START_QUIZ, HOME} from '../../constants/routes';
import './index.scss';
import styled from 'styled-components';

const Result = styled.p`
    font-weight: 600;
    color: ${props => props.correct ? '#019500' : 'red'}
`;

const FinalResult = (props) => {
    const {state, dispatch} = useContext(Store);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        state.userAnswers.forEach(item => {
            if (item.userAnswer === item.question.answer.split(":")[1].trim()) {
                setCorrectAnswerCount(prev => prev + 1)
            }
        })
    }, [state.userAnswers])

    const retryQuiz = () => {
        state.userAnswers = [];
        props.history.push(START_QUIZ);
    }

    const startNewQuiz = () => {
        state.userAnswers = [];
        dispatch({
            type: SET_QUESTIONS,
            payload: state.restQuestions
        })
        props.history.push(HOME);
    }

    const showModal = () => {
        setVisible(true)
    };
    
    const handleOk = e => {
        setVisible(false)
    };

    return (
        <div className="final-result-screen">
            <h2 className="title">Result</h2>
            <div className="result-area">
                <label className="correct-field">Correct: {correctAnswerCount}</label>
                <label className="wrong-field">Wrong: {state.userAnswers.length - correctAnswerCount}</label>
            </div>
            <div className="percentage-area">
                <label>Score: </label>
                {
                    ((correctAnswerCount / state.userAnswers.length) * 100).toFixed(2) !== "NaN" ?
                    <Progress type="circle" percent={Number(((correctAnswerCount / state.userAnswers.length) * 100).toFixed(2))} /> :
                    <Progress type="circle" percent={0} />
                }
            </div>
            <button className="retry-quiz" onClick={retryQuiz}>Retry Quiz</button>
            <p className="or">or</p>
            <button className="start-new-quiz" onClick={startNewQuiz}>Start New Quiz</button>
            {
                state.userAnswers.length > 0 &&
                <button className="btn-check-answers" onClick={showModal}>Check the Answers</button>
            }
            <Modal
            title="Your Answers"
            visible={visible}
            onOk={handleOk}
            onCancel={handleOk}
            cancelButtonProps={{hidden: true}}
            >
                {
                    state.userAnswers.length > 0 &&
                    state.userAnswers.map((answer,index) => {
                        return (
                            <div key={index} className="check-answers-area">
                                <h3>Question {index + 1}</h3>
                                <div className="check-answers">
                                    <p className="user-answer">Your Answer: <span>{answer.userAnswer}</span></p>
                                    <p className="right-answer">Correct: <span>{answer.question.answer.split(":")[1].trim()}</span></p>
                                    <label style={{marginRight: '5px'}}>Result: </label>
                                    {
                                        answer.result === "Correct" ?
                                        <Result correct>Correct</Result> : 
                                        <Result wrong>Wrong</Result> 
                                    }                                                                        
                                </div>
                            </div>
                        )
                    })
                    
                }
            </Modal>
        </div>
    )
}

export default FinalResult;