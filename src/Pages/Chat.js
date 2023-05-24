import React from 'react'
import ChatBar from './ChatBar'
import ChatFooter from './ChatFooter'
import ChatMessage from './ChatMessage'

const Chat = () => {
  return (
    <div>
      <h1>Chat</h1>
      <ChatBar />
      <ChatMessage />
      <ChatFooter />
    </div>
  )
}

export default Chat