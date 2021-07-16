import './App.css';
import TodoMain from "./pages/todos/todo-main";
import Home from "./pages/home/home"
import Photos from "./pages/photos/photos"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import * as classes from './app.module.scss';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <TodoMain/>
    //   </header>
    // </div>
      <Router>
          <ul className="App-header">
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/react-todos"> Todos </Link>
              </li>
              <li>
                  <Link to="/react-photos"> Photos </Link>
              </li>
          </ul>
          <Switch>
              <Route path="/react-todos">
                  <TodoMain/>
              </Route>
              <Route path="/react-photos">
                  <Photos/>
              </Route>
              <Route path="/">
                  <Home/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
