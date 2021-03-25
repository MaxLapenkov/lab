import React, { useState, useEffect } from 'react';
import { getList } from './api';

import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        getList().then(response => response.json())
            .then(json => setList(json.slice(0, 10)))
    }, [])

    const listItems = list.map((item) => {
        return <p key={item.id}>{item.title}</p>
    })

    const handleChangeValue = (event) => {
      setInputValue(event.target.value);
    }

    return (
      <div className='app'>
          <div className="list">
              {listItems}
          </div>
          <form className="form">
            <label>
              <h6>Введите текст</h6>
              <input className="input" type="text" value={inputValue} onChange={handleChangeValue}></input>
            </label>
            <button className="button" type="button">
              Отправить
            </button>
          </form>
      </div>
      
    )
}

export default App;
