import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/'></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
