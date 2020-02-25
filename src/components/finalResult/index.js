import React, {useContext, useEffect, useState} from 'react';
import {Store} from '../../store';
import './index.scss';

const FinalResult = (props) => {
    const {state} = useContext(Store);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    
    useEffect(() => {
        state.userAnswers.forEach(item => {
            if (item.userAnswer.optionName === item.question.answer) {
                setCorrectAnswerCount(prev => prev + 1)
            }
        })
    }, [])

    const retryQuiz = () => {
        props.history.push('/start-quiz');
        state.userAnswers = [];
    }

    return (
        <div className="final-result-screen">
            <h2 className="title">Result</h2>
            <div className="result-area">
                <label className="correct-field">Correct: {correctAnswerCount}</label>
                <label className="wrong-field">Wrong: {state.userAnswers.length - correctAnswerCount}</label>
            </div>
            <div className="percentage-area">
                <label className="percentage-field">Score: {((correctAnswerCount / state.userAnswers.length) * 100).toFixed(2)} %</label>
            </div>
            <button className="retry-quiz" onClick={retryQuiz}>Retry Quiz</button>
            <p className="or">or</p>
            <button className="start-new-quiz">Start New Quiz</button>
        </div>
    )
}

export default FinalResult;