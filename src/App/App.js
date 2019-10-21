import React, { Component } from 'react'
import './App.scss'
import MainBackGrnd from '../MainBackGrnd/MainBackGrnd'
import MtnCover from '../MtnCover/MtnCover'
import Name from '../Name/Name'
import About from '../About/About'
import InfoPage from '../InfoPage/InfoPage'
import NightSky from '../NightSky/NightSky.js'

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
        <InfoPage />
        <NightSky />
      </main>
    )
  }
}

export default App;