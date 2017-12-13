import React from 'react';
import { Link } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";
import Nouveautes from "./Nouveautes";




class Home extends React.Component {

    constructor() {
        super();
    }

  render() {
    return (
    <div>
      <Header/>
      <Nouveautes/>
      <Footer/>
    </div>
    );
  }
}

export default Home;
