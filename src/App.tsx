import React from 'react';
import './style/App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header';
import { LoginFormModal } from './components/loginFormModal';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <LoginFormModal />
    </>
  );
}

export default App;
