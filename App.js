import React from 'react';
import {Provider} from 'react-redux';

import LoadingHOC from "./src/components/loading";

import Navigation from './src/navigation';
import {configureStore} from './src/redux/store';

import './src/firebase'

export default function App() {
    return (
        <Provider store={configureStore()}>
            <LoadingHOC>
                <Navigation/>
            </LoadingHOC>
        </Provider>
    );
};


