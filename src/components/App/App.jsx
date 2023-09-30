import React from 'react';
import { useEffect } from 'react';
// import { AppWrapper } from './App.styled';
import { useDispatch } from 'react-redux';
import { Layout } from 'components/Layout';
import HomePage from 'Pages/HomePage';
import ContactPage from 'Pages/ContactPage';
import RegisterPage from 'Pages/RegisterPage';
import LoginPage from 'Pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'Redux/Auth/authOperations';
import { useAuth } from 'hooks/useAuth';


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Route>
    </Routes>
  );
};
