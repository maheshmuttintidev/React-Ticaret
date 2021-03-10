import React, { Component } from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';
export class TicaretWebsite extends Component {
  render() {
    return (
      <>
        <Header />
        <Article />
        <Footer />
      </>
    );
  }
}

export default TicaretWebsite;
