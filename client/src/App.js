import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import Header from "./pages/Layout/Header";
import NavBar from "./components/NavBar";
import Footer from "./pages/Layout/Footer";
import Products from "./pages/ProductsCategory/products";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";

import "./App.css";

const App = () => {

  return (
      <Router>
          <Header/>
              <section>
                  <NavBar />
                  <main className="container">
                  <Switch>
                      <Route path='/home' component={HomePage} exact />
                      <Route path='/boys' component={Products} exact />
                      <Route path='/girls' component={Products} exact />
                      <Route path='/about' component={About} exact />
                      <Route path='/contact' component={Contact} exact />
                  </Switch>
                  </main>
              </section>
          <Footer />
      </Router>
  );
}

export default App;
