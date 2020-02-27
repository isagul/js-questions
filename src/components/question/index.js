import React, { useContext, useState, useEffect } from 'react';
import { Store } from '../../store';
import { SET_USER_ANSWER } from '../../constants/actions'
import { Modal, notification, Icon } from 'antd';
import {HOME, FINAL_RESULT} from '../../constants/routes';
import './index.scss';

const Question = (props) => {
    const { state, dispatch } = useContext(Store);
    const [currentPage, setCurrentPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [solution, setSolution] = useState("");

    const linksPerPage = 1;
    const indexOfLastLink = currentPage * linksPerPage;
    const indexOfFirstLink = indexOfLastLink - linksPerPage;

    useEffect(() => {
        if (state.currentQuestions.length === 0) {
            props.history.push(HOME)
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
        // setCurrentQuestion({})
    }

    const nextQuestion = () => {
        const idx = state.userAnswers.findIndex(answer => answer.question === currentQuestion.question);
        if (idx === -1) {
            notification.open({
                message: 'Notification',
                description:
                  'Please choose any option.',
                icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
              });
        } else {
            if (currentPage < state.currentQuestions.length) {
                setCurrentPage(currentPage => currentPage + 1);
            } else {
                props.history.push(FINAL_RESULT);
            }
            setCurrentQuestion({})
        }
    }

    function getAnswer(answer) {
        let userAnswer = answer.split(':')[0];
        let realAnswer = state.currentQuestions[currentPage - 1].answer.split(":")[1].trim();

        let result = "";

        if (userAnswer === realAnswer) {
            result = "Correct";
        } else {
            result = "Wrong"
        }
        
        dispatch({
            type: SET_USER_ANSWER,
            payload: {
                userAnswer,
                question: state.currentQuestions[currentPage - 1],
                result
            }
        })
    }

    const renderOptions = (options) => { 
        let optionsArray = [];       
        optionsArray = options.split('\n').filter(item => item.trim().length > 0);
        return (
            <>
                {
                    optionsArray.map((option,index) => {
                        return (
                            <div 
                                key={index} 
                                onClick={() => getAnswer(option)} 
                                className="options"
                                style={{
                                    background: option.split(':')[0] === currentQuestion.userAnswer ? '#ed5f1f' : 'cadetblue',
                                }}
                                >
                                {option}
                            </div>
                        )
                    })
                }
            </>
        )
    }

    const renderQuestionDetail = (detail) => {
        return detail.split('.')[1].trim();
    }

    function showModal(e) {
        setSolution(e.solution)
        setVisible(true)
    };

    const handleOk = e => {
        setVisible(false)
    };

    const handleCancel = e => {
        setVisible(false)
    };

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
                                {
                                    item.code !== null &&
                                    <pre className="code">{item.code}</pre>
                                }
                                <p className="question-info">{renderQuestionDetail(item.questionDetail)}</p>
                                <div className="options-area">
                                    { renderOptions(item.options) }
                                </div>
                            </div>
                            <div className="user-action">
                                <p onClick={prevQuestion}>Previous</p>
                                <p onClick={() => showModal(item)}>View Solution</p>
                                <p onClick={nextQuestion}>Next</p>
                            </div>
                            {
                                visible &&
                                <Modal
                                    title="Solution"
                                    visible={visible}
                                    onOk={handleOk}
                                    centered
                                    onCancel={handleCancel}
                                >
                                    <p>{solution}</p>
                                </Modal>
                            }
                        </div>
                    )
                })
            }
        </>
    )
}

export default Question;