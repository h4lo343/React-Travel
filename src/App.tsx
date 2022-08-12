import React from 'react';
import styles from  './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, SigninPage, RegisterPage, DetailPage} from './pages';



 

function App() {
  return (
    <div className={styles['App']}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signin' element={<SigninPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/detail/:id' element={<DetailPage/>}/> 
          <Route path='*' element={<h1>aaaaa</h1>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
