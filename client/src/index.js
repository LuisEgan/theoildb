import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {jQuery as $} from 'jquery';

// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// fontawesome
import '../node_modules/font-awesome/css/font-awesome.min.css';
// css
import './css/App.css';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const render = Component => {
    ReactDOM.render(
        <Provider store={ store }>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);

registerServiceWorker();
