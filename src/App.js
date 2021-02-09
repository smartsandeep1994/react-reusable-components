import React from 'react';
import Fetch from './components/Fetch';
import ReusableListing from './components/ReusableListing';
import Main from './Main';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./Routes";

export default class Apps extends React.Component{
    render(){
        
      return(
        <Router>
            <Header />
            <div className="container mt-5">
                <Routes />
            </div>
            <Footer />
      </Router>
      )
    }
}