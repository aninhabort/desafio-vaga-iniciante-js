import React, { useState } from "react";

const ChatFooter = () => {
  const [message, setMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log({ userName: localStorage.getItem('userName'), message });
    setMessage('');
  };

  return (
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
  )
}

export default ChatFooter