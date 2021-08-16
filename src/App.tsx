import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators ,State} from './state';


function App() {
  const [input,setInput] = useState(0);

  const dispatch = useDispatch();
  const { depositMoney,withdrawMoney,bankruptMoney } = bindActionCreators(actionCreators,dispatch);
  const amount  = useSelector((state:State) => state.bank)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>{amount}</h1>
        <input
          type='number'
          placeholder='enter amount'
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
        <div className='btns'>
          <button onClick={() => withdrawMoney(input)}>withdraw</button>
          <button onClick={() => depositMoney(input)}>deposit</button>
          <button onClick={() => bankruptMoney()}>bankrupt</button>
        </div>
      </header>
    </div>
  )
}

export default App;
