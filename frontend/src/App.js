import React from 'react';
//import data from './data';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen'; 


function App() 
{
  const openmenu = () =>{
    document.querySelector(".sidebar").classList.add("open")
  }

  const closemenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
      <BrowserRouter>
    <div className="grid-container"> 
        <header className="header">
            <div className="brand">
                <button className="sidebar-" onClick={openmenu}>
                    &#9776;
                </button>
                <Link to="/">Amazona</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign in</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closemenu}>x</button>
            <ul>
                <li><a href="index.html">Trousers</a></li>
                <li><a href="index.html">Shirts</a></li>
            </ul>
        </aside>
        <main className="main">
          <div className="content">
              <Route path ="/products/:id" component= {ProductScreen}/>
              <Route path="/" exact={true} component = {HomeScreen}/>
               
            </div>
        </main>
        <footer className="footer">All rights reserved</footer>
    </div>

  </BrowserRouter>);
}

export default App;
