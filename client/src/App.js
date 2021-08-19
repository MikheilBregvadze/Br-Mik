import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Products from "./pages/ProductsCategory/products";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Login from "./pages/Authentication/Login/login";
import Registration from "./pages/Authentication/Registration/registration";

import "./App.css";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalRegistration, setShowModalRegistration] = useState(false);

    useEffect(() => {
        if(showModal || showModalRegistration)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'auto';

    }, [showModal, showModalRegistration]);

    const closeModal = () => {
        setShowModal(false);
        setShowModalRegistration(false);
    }
    const showLoginModal = () => {
        setShowModal(true);
    }
    const openRegistrationModal = () => {
        setShowModal(false);
        setShowModalRegistration(true);
    }
    const closeRegisterModal = () => {
        setShowModal(true);
        setShowModalRegistration(false);
    }
  return (
      <Router>
          {showModal && <Login closeModal={closeModal} openRegistrationModal={openRegistrationModal} />}
          {showModalRegistration && <Registration closeModal={closeModal} closeRegisterModal={closeRegisterModal}  />}
          <Header showLoginModal={showLoginModal} />
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
