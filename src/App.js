import React, { useState, useEffect } from 'react';
import { getList, getFiles, postEmp, postFile } from './api';

import './App.css';

function App() {
  const [peopleList, setPeopleList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  })
  const [fileValue, setFileValue] = useState();

  //Получение данных при загрузке
    useEffect(() => {
        getList().then(response => response.json())
            .then(json => setPeopleList(json))
        getFiles().then(response => response.json())
            .then(json => setFileList(json))
    }, [])


    //Обработка вводимых данных о человеке
    const handleChangeInputValue = (event, type) => {
      if(type === 'name') {
        setInputValue({
          ...inputValue,
          name: event.target.value 
        });
      }
      if(type === 'address') {
        setInputValue({
          ...inputValue,
          address: event.target.value 
        });
      }
      if(type === 'email') {
        setInputValue({
          ...inputValue,
          email: event.target.value 
        });
      }
      if(type === 'phone') {
        setInputValue({
          ...inputValue,
          phone: event.target.value 
        });
      }
    }

    //Обработка вводимого файла
    const handleChangeFileValue = (event) => {
      setFileValue({
        document: event.target.files[0],
        name: event.target.files[0].name
      })
    }

    const handleSendInputData = () => {
      if(inputValue.name) {
        postEmp(inputValue).then((response) => console.log(response))
      }
    }

    const handleSendFile = () => {
      if (fileValue) {
        const formData = new FormData();
        formData.append('data', fileValue.document)
        formData.append('file_name', fileValue.name)
        formData.append('extencion', `.${fileValue.name.split('.').pop()}`)
        postFile(formData)
      } 
    }

    //Список с людьми
    const listItems = peopleList.map((item) => {
      return (
        <div key={item.id} className='item'>
          <p>Имя: {item.name}</p>
          <p>Почта: {item.email}</p>
          <p>Адрес: {item.address}</p>
          <p>Телефон: {item.phone}</p>
        </div>
      )      
  })

    return (
      <div className='app'>
        <div className="content">
          <div className="list">
            <h2>Люди</h2>
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
              <h6>Введите имя</h6>
              <input className="input" type="text" value={inputValue.name} onChange={(event) => handleChangeInputValue(event, 'name')}/>
            </label>
            <label>
              <h6>Введите адрес</h6>
              <input className="input" type="text" value={inputValue.address} onChange={(event) => handleChangeInputValue(event, 'address')}/>
            </label>
            <label>
              <h6>Введите почту</h6>
              <input className="input" type="email" value={inputValue.email} onChange={(event) => handleChangeInputValue(event, 'email')}/>
            </label>
            <label>
              <h6>Введите телефон</h6>
              <input className="input" type="text" value={inputValue.phone} onChange={(event) => handleChangeInputValue(event, 'phone')}/>
            </label>
            <button className="button" type="button" onClick={handleSendInputData}>
              Отправить текст
            </button>
          </form>
          <form className="form">
            <h6>Отправьте файл</h6>
            <input className='input' type='file' onChange={handleChangeFileValue}/>
            <button className="button" type="button" onClick={handleSendFile}>
              Отправить файл
            </button>
          </form>
          </div>
      </div>
      
    )
}

export default App;
