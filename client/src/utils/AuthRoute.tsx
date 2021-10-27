import * as React from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { Route, Redirect, RouteProps } from 'react-router';
import { useSelector } from 'react-redux';
//Typescript
import { State } from '../interfaces';

const AuthRoute: React.FC<RouteProps> = ({ component: Component, ...args }) => {
  const userInfo = useSelector((state: State) => state.user.userInfo);

  if (!Component) return null;
  return (
    <Route
      {...args}
      render={(props) =>
        userInfo ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AuthRoute;
