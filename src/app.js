// writing code - es6
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ChatRoom from './components/ChatRoom'


// state vs. props
// state when a component is storing information that are relevant to itself
// props when data is assigned to that component - container component

// any characteristic that you personally have/assigned to you would be a property (prop)
// my mood is a state.. (happy, hungry, sad -- person determines this)

// state values are visual values - highlighting, loading, sorting
// props are actual properties


class App extends Component {

  render(){
    return (
      // jsx -- we need to transpile
      <div>
        This is the React App.
        <ChatRoom />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
