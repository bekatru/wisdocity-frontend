import * as React from 'react';
import {Navigate} from 'react-router-dom';
import {ROUTES} from '../types';


interface LearnerRouteProps {
  children: React.ReactNode;
}


export const LearnerRoute: React.FC<LearnerRouteProps> = (props) => {
  const isLearner = true;

  return isLearner ? props.children : <Navigate to={ROUTES.ONBOARD}/>;
};
