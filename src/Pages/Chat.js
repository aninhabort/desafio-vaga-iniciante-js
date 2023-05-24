import React, { useState } from 'react'
import ChatBar from './ChatBar'
// import ChatFooter from './ChatFooter'
import ChatMessage from './ChatMessage'

const Chat = () => {
  const [message, setMessage] = useState('')
  const [sendMessage, setSendMessage] = useState([])

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log({ userName: localStorage.getItem('userName'), message });
    setSendMessage([message])
    setMessage('');
  };

  return (
    <div>
      <h1>Chat</h1>
      <ChatBar />
      <ChatMessage userInfo={sendMessage} />
      <div>
        <form onSubmit={handleSendMessage}>
          <input
            type="text" c
            lassName="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat