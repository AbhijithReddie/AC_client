// ChannelsList.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client'; // Import Socket.io

const socket = io('http://localhost:5000'); // Connect to the backend server

const ChannelsList = () => {
  const [channels, setChannels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/chat/channels');
        setChannels(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchChannels();

    // Cleanup the socket connection when the component unmounts
    /*return () => {
      socket.disconnect();
    };*/
  }, []);

  const handleChannelClick = (channelId) => {
    socket.emit('join_room', { channelId });
    console.log(channelId);
    navigate(`/chat/${channelId}`);
  };

  return (
    <div className="channels-list">
      {channels.map(channel => (
        <div
          key={channel._id}
          className="channel-card cursor-pointer bg-gray-200 p-4 rounded-md mb-4 hover:bg-gray-300 transition duration-300"
          onClick={() => handleChannelClick(channel._id)}  // Pass the channelId to join the room
        >
          <h3 className="text-lg font-semibold">{channel.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ChannelsList;
