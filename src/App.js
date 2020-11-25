import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Counter from "./learn-useState/Counter";
import Effect from "./learn-useEffect/Index";
import Context from "./learn-useContext/Index";
import Reducer from "./learn-useReducer/Counter2";
import Callback from "./learn-useCallback/Callback";

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">Use State</Link>
            </li>
            <li className="li">
              <Link to="/effect">Use Effect</Link>
            </li>
            <li className="li">
              <Link to="/context">Use Context</Link>
            </li>
            <li className="li">
              <Link to="/reducer">Use Reducer</Link>
            </li>
            <li className="li">
              <Link to="/callback">Use Callback</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Counter} />
          <Route path="/effect" exact component={Effect} />
          <Route path="/context" exact component={Context} />
          <Route path="/reducer" exact component={Reducer} />
          <Route path="/callback" exact component={Callback} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
