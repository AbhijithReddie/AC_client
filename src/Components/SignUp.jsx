import React, { useState } from 'react';

function SignUp() {
  const [role, setRole] = useState('student');
  const [expertise, setExpertise] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [companyIDCard, setCompanyIDCard] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700">Select Role</label>
            <div className="flex items-center mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === 'student'}
                  onChange={handleRoleChange}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Student</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="role"
                  value="alumni"
                  checked={role === 'alumni'}
                  onChange={handleRoleChange}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Alumni</span>
              </label>
            </div>
          </div>

          {/* Roll Number Input (only for Students) */}
          {role === 'student' && (
            <div className="mb-4">
              <label htmlFor="rollNumber" className="block text-gray-700">Roll Number</label>
              <input
                id="rollNumber"
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your roll number"
              />
            </div>
          )}

          {/* Mobile Number Input */}
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-gray-700">Mobile Number</label>
            <input
              id="mobileNumber"
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Company ID Card Input (only for Alumni) */}
          {role === 'alumni' && (
            <div className="mb-4">
              <label htmlFor="companyIDCard" className="block text-gray-700">Company ID Card</label>
              <input
                id="companyIDCard"
                type="text"
                value={companyIDCard}
                onChange={(e) => setCompanyIDCard(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your company ID card"
              />
            </div>
          )}

          {/* Expertise Dropdown (only for Alumni) */}
          {role === 'alumni' && (
            <div className="mb-4">
              <label htmlFor="expertise" className="block text-gray-700">Expertise</label>
              <select
                id="expertise"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Select your expertise</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Data Science">Data Science</option>
                <option value="MERN">MERN</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Internet Of Things">Internet Of Things</option>
                <option value="Testing">Testing</option>
                <option value="Development">Development</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="C++">C++</option>
              </select>
            </div>
          )}

          {/* Sign Up Button */}
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
