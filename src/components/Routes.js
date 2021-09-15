import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import QuoteOfTheDay from './QuoteOfTheDay';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/calculator" component={App} />
      <Route path="/qotd" component={QuoteOfTheDay} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
