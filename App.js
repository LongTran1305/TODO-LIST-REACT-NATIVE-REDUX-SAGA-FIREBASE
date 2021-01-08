import React from 'react';
import {Provider} from 'react-redux';
import Index from './src/components/srceen/Todo';
import rootStore from './src/redux/store/index';


export default function App() {
    return (
        <Provider store={rootStore}>
            <Index/>
        </Provider>
    );
}


