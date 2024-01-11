import * as React from 'react';
import {Navigate} from 'react-router-dom';
import {Routes} from '../types';


interface ExpertRouteProps {
  children: React.ReactNode;
}


export const ExpertRoute: React.FC<ExpertRouteProps> = (props) => {
  const isExpert = false;

  return isExpert ? props.children : <Navigate to={Routes.Onboard}/>;
};
