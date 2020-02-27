import React, {useContext, useEffect, useState} from 'react';
import {Store} from '../../store';
import { Progress } from 'antd';
import {SET_QUESTIONS} from '../../constants/actions';
import {START_QUIZ, HOME} from '../../constants/routes';
import './index.scss';

const FinalResult = (props) => {
    const {state, dispatch} = useContext(Store);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    
    useEffect(() => {
        state.userAnswers.forEach(item => {
            if (item.userAnswer === item.question.answer.split(":")[1].trim()) {
                setCorrectAnswerCount(prev => prev + 1)
            }
        })
    }, [])

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
        </div>
    )
}

export default FinalResult;