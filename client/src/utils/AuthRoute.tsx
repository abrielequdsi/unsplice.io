import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../clientTypes';

function AuthRoute({ component: Component, ...args }) {
  const userInfo = useSelector((state: State) => state.user.userInfo);

  return <Route {...args} render={(props) => (userInfo ? <Component {...props} /> : <Redirect to="/login" />)} />;
}

export default AuthRoute;
