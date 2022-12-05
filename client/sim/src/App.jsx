import logo from './logo.svg';
import './App.css';
import React, {ReactDOM,  useRef, useState} from 'react'

export class App extends React.Component{
  constructor(){
    super()

    //Create the state of the variables
    this.state = {transmittedMessage: '', receivedMessage: ''}
  }

  // Method triggered when the send message button is clicked on the UI. 
  sendMessage() {

    //Send message to the backend using POST as it's more secure to send the information via the body than as params.
    fetch("http://localhost:5000/clean_message", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: this.state.transmittedMessage})
    }).then(response => response.json())
    .then(data => {
      this.setState({
        //Response is the filtered/cleaned output and displayed on the receiver's end
        receivedMessage: data['response']
      })
    })

    
  }

  //Clear the message in the IM
  clearMessage() {
    this.setState({
      transmittedMessage: ""
    });
    console.log("Message Cleared.")
  }

  //Updating the state as the text is being typed.
  handleMessage(e, type){
    if(type == 'transmitted'){
      this.setState({
        transmittedMessage: e.target.value
      });
    }
    else if(type == 'received'){
      this.setState({
        receivedMessage: e.target.value
      });
    }
  }

  //Render the UI
  render(){
    return (
      <div>
        <div className='heading'>
          <h3 >Safe IM</h3>
        </div>

        <div className='messageBox' id="client1">
          <h3>Sender</h3>

          <textarea placeholder='Enter message' rows="10" cols="70" defaultValue={this.state.transmittedMessage} onChange={(e) => this.handleMessage(e, 'transmitted')}></textarea>
          <br></br>
          <button className='btn' onClick={() => this.sendMessage()}>Send Message</button>
          <button className='btn' onClick={() => this.clearMessage()}>Clear Message</button>
        </div>

        <div className='messageBox' id="client2">
          <h3>Receiver</h3>

          <textarea placeholder='Enter message' rows="10" cols="70" defaultValue={this.state.receivedMessage} onChange={(e) => this.handleMessage(e, 'received')}></textarea>
          <br></br>
          <button className='btn' onClick={() => this.sendMessage()}>Send Message</button>
          <button className='btn' onClick={() => this.clearMessage()}>Clear Message</button>
        </div>

        <div className="App">
          <header className="App-header">
          
          </header>
        </div>
      </div>
    );
  }
}