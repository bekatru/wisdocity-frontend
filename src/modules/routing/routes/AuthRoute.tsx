import * as React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {Routes} from '../types';
import { useIsAuthenticated, useProfile } from 'modules/auth';
import { useEffect } from 'react';


interface ProtectedRouteProps {
  children: React.ReactNode;
}


export const AuthRoute: React.FC<ProtectedRouteProps> = (props) => {
  const isAuthenticated = useIsAuthenticated();

  const auth = useProfile()

  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.data) return;
    if (!auth.data.is_verified) return navigate(Routes.Verification);
    if (!auth.data.current_role) return;
    switch (auth.data.current_role) {
      case "learner":
        return navigate(Routes.Learner);
      case "expert":
        return navigate(Routes.Expert);
    }
  }, [auth.data, navigate])

  return isAuthenticated ? props.children : <Navigate to={Routes.SignIn}/>;
};
