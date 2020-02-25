import React, {useContext, useState, useEffect} from 'react';
import {Store} from '../../store';
import {SET_USER_ANSWER} from '../../constants/actions'
import './index.scss';

const Question = (props) => {
    const {state, dispatch} = useContext(Store);
    const [currentPage, setCurrentPage] = useState(1);
    // const [selectedOption, setSelectedOption] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState({userAnswer: {optionName: ''}, question: {id : ''}});


    const linksPerPage = 1;
    const indexOfLastLink = currentPage * linksPerPage;
    const indexOfFirstLink = indexOfLastLink - linksPerPage;

    useEffect(() => {
        if (state.currentQuestions.length === 0) {
            props.history.push('/')
        }
    }, []);

    useEffect(() => {
        if (state.userAnswers[currentPage - 1] !== undefined) {
            setCurrentQuestion(state.userAnswers[currentPage - 1])
        }
    }, [state, currentPage])

    const prevQuestion = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage => currentPage - 1);
        }
        setCurrentQuestion({userAnswer: {optionName: ''}, question: {id : ''}})
    }

    const nextQuestion = () => {
        const idx = state.userAnswers.findIndex(answer => answer.question.id === currentQuestion.question.id);
        if (idx === -1) {
            console.log("Please Vote!")
        } else {
            if (currentPage < state.currentQuestions.length) {
                setCurrentPage(currentPage => currentPage + 1);
            } else {
                props.history.push('final-result');
            }
            setCurrentQuestion({userAnswer: {optionName: ''}, question: {id : ''}})
        }        
    }

    function getAnswer(answer) {
        let result = "";

        if (state.currentQuestions[currentPage - 1].answer === answer.optionName) {
            result = "Correct";
        } else {
            result = "Wrong"
        }
        dispatch({
            type: SET_USER_ANSWER,
            payload: {
                userAnswer: answer,
                question: state.currentQuestions[currentPage - 1],
                result
            }
        })
    }

    return (
        <>
            {
                state &&
                state.currentQuestions.slice(indexOfFirstLink, indexOfLastLink).map((item, index) => {
                    return (
                        <div className="question" key={index}>
                            <h2 className="title">Question {currentPage}</h2>
                            <p className="question-counter">Question {currentPage} of {state.currentQuestions.length}</p>
                            <div>
                                <pre className="code">{item.question}</pre>
                                <p className="question-info">What's the output?</p>
                                <div className="options-area">
                                    {
                                        item.options.map((option, index) => {
                                            return (
                                                <div key={index} 
                                                    className="options" 
                                                    onClick={() => getAnswer(option)}
                                                    style={{
                                                        background: option.optionName === currentQuestion.userAnswer.optionName ? '#019500' : '#ed5f1f',
                                                        borderColor: option.optionName === currentQuestion.userAnswer.optionName ? '#019500' : '#ed5f1f'
                                                    }}>
                                                    <label>{option.optionName} - </label>
                                                    <p>{option.option}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="user-action">
                                <p onClick={prevQuestion}>Previous</p>
                                <p>View Solution</p>
                                <p onClick={nextQuestion}>Next</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Question;