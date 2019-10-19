import React, { Component } from 'react'
import './App.scss'
import Name from '../Name/Name'

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
      </main>
    )
  }
}

export default App;