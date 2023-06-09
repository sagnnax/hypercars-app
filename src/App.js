import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddHyper from "./components/add-hyper.component";
import HypersList from "./components/hypers-list.component";
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Hypercars
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3 bg-dark mx-auto">
          <h2 >Hypercars App</h2>
          <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<HypersList />} />
            <Route path="add" element={<AddHyper />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;