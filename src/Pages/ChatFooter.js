import React, { useState } from "react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('')

  const handleSendMessage = (e) => {
    const { value } = e.target
    value.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };

  return (
    <div>
      <form>
        <input type="text" className="message" value={ message } onChange={(e) => handleSendMessage(e)}/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ChatFooter