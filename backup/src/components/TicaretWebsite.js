import React, { Component } from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';
export default class TicaretWebsite extends Component {
  render() {
    return (
      <div className="layout-container">
        <Header />
        <Article />
        <Footer />
      </div>
    );
  }
}
