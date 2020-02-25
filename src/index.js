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

ReactDOM.render(
    <StoreProvider>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/start-quiz" component={Question}/>
                <Route exact path="/final-result" component={FinalResult}/>
            </Switch>
        </Router>
    </StoreProvider>
    ,document.getElementById('root'));

