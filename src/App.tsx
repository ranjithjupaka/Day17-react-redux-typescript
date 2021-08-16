import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators ,State} from './state';


function App() {
  const dispatch = useDispatch();

  const { depositMoney,withdrawMoney,bankruptMoney } = bindActionCreators(actionCreators,dispatch);
  const amount  = useSelector((state:State) => state.bank)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>{amount}</h1>
        <button onClick={() => withdrawMoney(500)}>withdraw</button>
        <button onClick={() => depositMoney(1000)}>deposit</button>
        <button onClick={() => bankruptMoney()}>bankrupt</button>
      </header>
    </div>
  )
}

export default App;
