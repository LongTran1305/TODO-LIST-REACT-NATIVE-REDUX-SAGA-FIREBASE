import React from 'react';
import {Provider} from 'react-redux';
import Index from './src/components/srceen/Todo';
import DemoFlatList from "./src/components/srceen/FlatList";
import rootStore from './src/redux/store';


export default function App() {
    return (
        <Provider store={rootStore}>
            <Index/>
            {/*<DemoFlatList />*/}
        </Provider>
    );
}


