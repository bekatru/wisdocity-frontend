import * as React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {Routes} from '../types';
import { useIsAuthenticated } from 'modules/auth';
import { useAuth } from 'modules/auth/hooks/useAuth';
import { useEffect } from 'react';


interface ProtectedRouteProps {
  children: React.ReactNode;
}


export const AuthRoute: React.FC<ProtectedRouteProps> = (props) => {
  const isAuthenticated = useIsAuthenticated();

  const auth = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    console.log(auth)
    if (!auth.data) return;
    if (!auth.data.user.is_verified) return;
    if (!auth.data.user.current_role) return;
    switch (auth.data.user.current_role) {
      case "LEARNER":
        return navigate(Routes.Learner);
      case "EXPERT":
        return navigate(Routes.Expert);
    }
  }, [auth.data])

  return isAuthenticated ? props.children : <Navigate to={Routes.SignIn}/>;
};
