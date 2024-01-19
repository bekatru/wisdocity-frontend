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
    if (!auth.data.user.dataValues.is_verified) return navigate(Routes.Verification);
    if (!auth.data.user.dataValues.current_role) return;
    switch (auth.data.user.dataValues.current_role) {
      case "LEARNER":
        console.log("learner");
        return navigate(Routes.Learner);
        
      case "EXPERT":

      console.log("expert");
        return navigate(Routes.Expert);
    }
  }, [auth.data])

  return isAuthenticated ? props.children : <Navigate to={Routes.SignIn}/>;
};
