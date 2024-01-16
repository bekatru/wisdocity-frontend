import * as React from 'react';
import {Navigate} from 'react-router-dom';
import {Routes} from '../types';
import { useIsAuthenticated } from 'modules/auth';


interface ProtectedRouteProps {
  children: React.ReactNode;
}


export const AuthRoute: React.FC<ProtectedRouteProps> = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? props.children : <Navigate to={Routes.SignIn}/>;
};
