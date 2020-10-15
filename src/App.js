import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Calculator from './components/calculadora/Calculator';
import ToDoList from './components/todolist/ToDoList';
import FlipMove from 'react-flip-move';

function App() {
  return (
      <Router>
        <div className="menu">
          <nav className="sidebar">
            <div className="text">Menu</div>
            <ul>
              <li>
                <Link className="a" to="/calculadora">Calculadora</Link>
              </li>
              <li>
                <Link className="a" to="/todolist">To Do List</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div class="box">
            <div class="quadrado"></div>
            <div class="quadrado"></div>
            <div class="quadrado"></div>
            <div class="quadrado"></div>
            <div class="quadrado"></div>
            <div class="quadrado"></div>
            <div class="quadrado"></div>
            <div class="quadrado"></div>
            <div class="quadrado"></div>
            <div class="quadrado"></div>
          
            <Switch>
              <Route exact path="/todolist" component={ToDoList} />
              <Route path="/calculadora"  component={Calculator} />
            </Switch>
        </div>  
      </Router>
  );
}

export default App;
