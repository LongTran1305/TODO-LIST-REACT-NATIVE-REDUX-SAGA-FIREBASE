import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './src/navigation';
import { configureStore } from './src/redux/store';


export default function App() {
    return (
        <Provider store={configureStore()}>
            <Navigation />
        </Provider>
    );
}


