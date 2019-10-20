import React, { Component } from 'react'
import './App.scss'
import Name from '../Name/Name'
import About from '../About/About'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render = () => {
    return (
      <main>
        <Name />
        <About />
      </main>
    )
  }
}

export default App;