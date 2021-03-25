import React, { useState, useEffect } from 'react';
import { getList } from './api';

import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const [fileValue, setFileValue] = useState();

    useEffect(() => {
        getList().then(response => response.json())
            .then(json => setList(json.slice(0, 10)))
    }, [])

    const listItems = list.map((item) => {
        return <p key={item.id}>{item.title}</p>
    })

    const handleChangeInputValue = (event) => {
      setInputValue(event.target.value);
    }

    const handleChangeFileValue = (event) => {

      setFileValue({
        document: event.target.files[0],
        name: event.target.files[0].name
      })
    }

    if(fileValue) {
      const formData = new FormData();
      formData.append('document', fileValue.document)
      formData.append('name', fileValue.name)
      console.log(formData.get('name'));
    }
    

    return (
      <div className='app'>
        <div className="content">
          <div className="list">
            <h2>Текст</h2>
               {listItems}
          </div>
          <div className="images">
            <h2>Файлы</h2>
              rfhn
          </div>
        </div>       
          <div className="form-container">
          <form className="form">
            <label>
              <h6>Введите текст</h6>
              <input className="input" type="text" value={inputValue} onChange={handleChangeInputValue}/>
            </label>
            <button className="button" type="button">
              Отправить текст
            </button>
          </form>
          <form className="form">
            <h6>Отправьте файл</h6>
            <input className='input' type='file' onChange={handleChangeFileValue}/>
            <button className="button" type="button" >
              Отправить файл
            </button>
          </form>
          </div>
      </div>
      
    )
}

export default App;
