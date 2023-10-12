import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import  Store  from './components/redux/Store';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import SignIn from './pages/Sign-in/Sign-in';
import Dashboard from './pages/Dashboard/Dashboard'
import './index.scss'



ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
        <Router>
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path ="/Dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </Router>
      </React.StrictMode>,
    </Provider>,
  document.getElementById('root')
);
