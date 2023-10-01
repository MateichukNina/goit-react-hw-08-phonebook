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
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivatRoute';
import { AppWrapper } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
        </Route>
      </Routes>
    </AppWrapper>
  );
};
