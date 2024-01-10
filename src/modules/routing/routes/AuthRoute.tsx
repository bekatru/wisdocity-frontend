import * as React from 'react';
import {Navigate} from 'react-router-dom';
import {ROUTES} from '../types';


interface ProtectedRouteProps {
  children: React.ReactNode;
}


export const AuthRoute: React.FC<ProtectedRouteProps> = (props) => {
  const isAuthenticated = true;

  return isAuthenticated ? props.children : <Navigate to={ROUTES.SIGN_IN}/>;
};
