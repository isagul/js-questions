import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Question from './components/question/index';
import FinalResult from './components/finalResult/index';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { StoreProvider } from './store';
import {HOME, FINAL_RESULT, START_QUIZ} from './constants/routes';
import 'antd/dist/antd.css';

ReactDOM.render(
    <StoreProvider>
        <Router>
            <Switch>
                <Route exact path={HOME} component={App}/>
                <Route exact path={START_QUIZ} component={Question}/>
                <Route exact path={FINAL_RESULT} component={FinalResult}/>
            </Switch>
        </Router>
    </StoreProvider>
    ,document.getElementById('root'));

