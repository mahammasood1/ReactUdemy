import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import rootReducer from './store/reducers';
import {createStore, compose} from 'redux';

// let store = createStore(rootReducer)

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

const store = createStore(rootReducer, enhancers);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));
