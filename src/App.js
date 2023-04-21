import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardDetail from './components/CardDetail';


const App = () => {
   return (
    <Router>
      <div className='App'>
      <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/books/:id">
              <CardDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
