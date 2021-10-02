import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthRoute from './utils/AuthRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <AuthRoute exact path="/" component={Dashboard} />
    </Router>
  );
};

export default App;
