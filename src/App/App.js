import React, { Component } from 'react'
import './App.scss'
import MainBackGrnd from '../MainBackGrnd/MainBackGrnd'
import MtnCover from '../MtnCover/MtnCover'
import Name from '../Name/Name'
import About from '../About/About'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount = () => {
    const main = document.querySelector('main')
    main.addEventListener('scroll', (event) => {
      console.log("hey", event)
    })
  }


  render = () => {
    return (
      <main>
        <MainBackGrnd />
        <Name handleScroll={this.handleScroll} />
        <MtnCover handleScroll={this.handleScroll} />
        <About />
      </main>
    )
  }
}

export default App;