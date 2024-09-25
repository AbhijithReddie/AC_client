import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';

const ChatComponent = ({ onBack }) => {
  const { channelId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    // Create the socket connection
    const socketIo = io('http://localhost:5000', {
      transports: ['websocket'], // Force WebSocket only
    });
    setSocket(socketIo);

    // Fetch messages when the component mounts
    const fetchMessages = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/chat/messages/${channelId}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();

    // Join the room
    socketIo.emit('join_room', { channelId: channelId });

    // Handle incoming messages
    socketIo.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on component unmount
    return () => {
      socketIo.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      sender: userName,
      channelId,
      content: newMessage,
      timestamp: new Date().toISOString(), // Add timestamp manually
    };

    // Emit the message to the server
    socket.emit('sendMessage', message);

    // Update local state with the new message
    setMessages((prevMessages) => [...prevMessages, message]);

    setNewMessage('');
  };

  return (
    <div className="chat-channel">
      {/* Messages Display */}
      <div className="messages-list h-64 overflow-y-auto bg-gray-100 p-4 mb-4">
        {messages.map((message, index) => (
          <div key={index} className="message mb-2">
            <div className="message-sender font-bold text-blue-600">{message.sender}</div> {/* Sender's name */}
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
};

export default ChatComponent;
