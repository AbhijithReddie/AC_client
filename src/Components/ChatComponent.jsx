import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatComponent({ channelId, onBack }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  // Fetch the messages when the component is mounted
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/chat/messages/${channelId}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, [channelId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    try {
      const response = await axios.post(`http://localhost:5000/chat/messages/${channelId}`, {
        content: newMessage
      });

      // Update the local state with the new message
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-channel">
      {/* Messages Display */}
      <div className="messages-list h-64 overflow-y-auto bg-gray-100 p-4 mb-4">
        {messages.map((message, index) => (
          <div key={index} className="message mb-2">
            <div className="message-content text-sm text-gray-800">{message.content}</div>
            <div className="message-timestamp text-xs text-gray-500">{new Date(message.timestamp).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="message-input flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type your message..."
        />

        {/* Send Button */}
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Send
        </button>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="mt-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-300"
      >
        Back
      </button>
    </div>
  );
}

export default ChatComponent;
