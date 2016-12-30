import React, { Component } from 'react'

class ChatRoom extends Component {

  constructor(props, context){
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      messages: '',
      messages: [
        {id:0, text: 'first message'},
        {id:1, text: 'second message'},
        {id:2, text: 'third message'}
      ]
    }
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
