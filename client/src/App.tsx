import React from 'react';
import './App.css';
import EntityPage from './pages/Entity';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App container-fluid">
      <ToastContainer />
      <Routes>
        <Route path='/' element={ <EntityPage />} />
      </Routes>
    </div>
  );
}

export default App;
