import React, { Component, lazy } from 'react'
const Article = lazy(() => import('./Article'))
export default class TicaretWebsite extends Component {
  render() {
    return (
        <Article />
    );
  }
}
