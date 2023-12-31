import React from 'react';
import './App.css';
import { AppRouter } from 'components/AppRouter';
import Header from 'components/header/Header';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <AppRouter />
    </div>
  );
};
