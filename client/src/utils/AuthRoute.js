import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthRoute({ component: Component, ...args }) {
  const userInfo = useSelector((state) => state.user.userInfo);

  return (
    <Route
      {...args}
      render={(props) =>
        userInfo ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default AuthRoute;
