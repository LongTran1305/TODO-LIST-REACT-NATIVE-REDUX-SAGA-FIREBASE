import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Todo from './src/components/srceen/Todo';
import rootStore from './src/store/index';


export default function App() {
  const [getText, setText] = useState('');
  const [getList, setList] = useState([]);

  return (
    <Provider store={rootStore}>
      <Todo />
    </Provider>
  );
}


