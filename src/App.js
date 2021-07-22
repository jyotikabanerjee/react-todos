import './App.css';
import TodoMain from "./pages/todos/todo-main";
import SelectedPhoto from "./pages/photos/selected-photo"
import MediaSearch from "./pages/search/media-search"
// import MyBlind from "./pages/myblind/my-blind"
import Home from "./pages/home/home"
import Photos from "./pages/photos/photos"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import * as classes from './app.module.scss';
import PhotosContext from "./pages/photos/PhotosContext";
import React, {useState} from "react";

function App() {
    const history = createBrowserHistory();
    let [allPhotos, setAllPhotos] = useState([]);
    let [selectedImg, setSelectedImg] = useState({}); //first img
// Get the current location.
//     const location = history.location;

// Listen for changes to the current location.
    history.listen((location, action) => {
        // location is an object like window.location
        console.log(action, location.pathname, location.state);
    });

    const value = {
        setPhotos:setAllPhotos, photos:allPhotos, setSelectedPhoto:setSelectedImg, selectedPhoto:selectedImg
    };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <TodoMain/>
    //   </header>
    // </div>
      <PhotosContext.Provider value={value}>
      <div className="parent">
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
              <li>
                  <Link to="/react-search"> Search </Link>
              </li>
          </ul>
          <Switch>
              <Route path="/react-todos">
                  <TodoMain/>
              </Route>
              <Route path="/react-photos/:id">
                  <SelectedPhoto/>
              </Route>
              <Route path="/react-photos">
                  <Photos/>
              </Route>
              <Route path="/react-search">
                <MediaSearch/>
              </Route>
              {/*<Route path="/react-myblind">*/}
              {/*    <MyBlind/>*/}
              {/*</Route>*/}
              <Route path="/">
                  <Home/>
              </Route>
          </Switch>
      </Router>
      </div>
      </PhotosContext.Provider>
  );
}

export default App;
