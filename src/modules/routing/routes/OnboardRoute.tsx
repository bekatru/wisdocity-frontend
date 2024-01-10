import * as React from 'react';
import {Navigate} from 'react-router-dom';
import {ROUTES} from '../types';


interface OnboardRouteProps {
  children: React.ReactNode;
}


export const OnboardRoute: React.FC<OnboardRouteProps> = (props) => {
  const isOnboarded = true;

  return isOnboarded ? props.children : <Navigate to={ROUTES.ONBOARD}/>;
};
