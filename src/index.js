import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { init } from '@rematch/core'
import * as models from './models/models'
import App from './App'

const store = init({
    models
});

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));