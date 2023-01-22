import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./MainPage";
import CurrencyPage from './CurrencyPage';

const Layout = () => (
  <>
    <Outlet />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/currency" element={<CurrencyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
