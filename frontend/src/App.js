
//import './App.css';
import Home from './Home.js'
import Subtask from './Subtask.js';
import CreateDemo from './CreateDemo.js';
import CreateSubtask from './CreateSubtask.js';
import CreateTask from './CreateTask.js';
import Navbar from './Navbar.js';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <div>
      
      <Router>
      <Navbar />
      <Switch>
      <Route exact path = "/" >
      <Home />
      </Route>
      <Route exact path="/demo-create">
      <CreateDemo />
      </Route>
      <Route exact path="/createSubtask">
        <CreateSubtask />
      </Route>
      <Route exact path="/createTask">
        <CreateTask />
      </Route>
      <Route exact path = "/:taskId">
      <Subtask />
      </Route>
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
