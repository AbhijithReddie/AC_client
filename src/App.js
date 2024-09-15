import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Interests from './Components/Interests';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ChatComponent from './Components/ChatComponent';
import ChannelsList from './Components/ChannelsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Default route to login page */}
          <Route path="*" element={<Login />} />

          {/* Other routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/channels" element={<ChannelsList />} />
          <Route path="/chat/:channelId" element={<ChatComponent />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
