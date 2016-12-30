import React, { Component } from 'react'

class ChatRoom extends Component {

  constructor(props, context){
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      messages: '',
      messages: [
        // {id:0, text: 'first message'},
        // {id:1, text: 'second message'},
        // {id:2, text: 'third message'}
      ]
    }
  }

  //Life Cycle method -- called by the system not by the user -- whenever the component shows up
  // this function will be automatically called
  componentDidMount(){
    console.log('componentDidMount')
    firebase.database().ref('message/').on('value', (snapshot) => {

      const currentMessages = snapshot.val()

      if (currentMessages != null){
        this.setState({
          messages: currentMessages
        })
      }
    })
  }

  // event -- where the function is coming from (target)
  // now capturing letters
  updateMessage(event) {
    // console.log('updateMessage: ' +event.target.value)
    this.setState({
      message: event.target.value
    })
  }

  submitMessage(event){
    console.log('submitMessage: '+this.state.message)
    // preparing next json message
    // capturing id and text from above
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }

    // whenever I call 'setState' -- meaning 'Reload'
    // it reacts to change -- rerenders this component
    // takes new data and renders the new data --
    // React(s) to state changes - calls again (very fast)
    // it reloads this component and not the whole DOM
    var list = Object.assign([], this.state.messages)
    list.push(nextMessage)
    this.setState({
      messages: list
    })

  }

  render(){
    // looping through messages array inside the state and returning a list item for each one
    // the message itself is being passed in to the map function
    // and rendering the text of the message inside the list item.
    // This will concatinate the variable 'current message' to all three list item or how many you have
    // currentMessage -- list item for all three
    const currentMessage = this.state.messages.map((message, i) => {
      return(
        <li key={message.id}>{message.text}</li>
      )
    })


    return (
      <div>
        <ol>
          {currentMessage}
        </ol>
        <input onChange={this.updateMessage} type="text" placeholder="Message" />
        <br />
        <button onClick={this.submitMessage}>Submit Message</button>
      </div>
    )
  }
}

export default ChatRoom
