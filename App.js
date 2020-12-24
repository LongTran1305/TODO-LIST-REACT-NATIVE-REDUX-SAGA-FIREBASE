import React from 'react';
import {Provider} from 'react-redux';

import Navigation from './src/navigation';
import rootStore from './src/redux/store';


export default function App() {
    return (
        <Provider store={rootStore}>
            <Navigation />
        </Provider>
    );
}


