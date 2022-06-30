import React from 'react';
import './style/App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './common/components/header';
import { LoginFormModal } from './common/components/login-form-modal';

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
