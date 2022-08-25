import React from 'react';
import styles from  './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, SigninPage, RegisterPage, DetailPage} from './pages';



 

function App() {
  return (
    <div className={styles['App']}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signin' element={<SigninPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/detail/:touristRouteId' element={<DetailPage/>}/> 
          <Route path='*' element={<h1>404 Not Found</h1>}/> 
        </Routes>
    </div>
  )
}

export default App;
