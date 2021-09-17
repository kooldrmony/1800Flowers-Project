import './App.css';
import Home from './components/Home/Home';
import EditForm from './components/EditForm/EditForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/editForm" component={EditForm} />
        </Switch>
      </Router>
      {/* <Home />
      <EditForm /> */}
    </div>
  );
}

export default App;
