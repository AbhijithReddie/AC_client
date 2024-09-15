    import React from 'react';
    import alumniLogo from '../Assets/alumniLogo.jpg';

    function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            
            {/* Left Image Section */}
            <div className="md:w-1/3">
            <img
                src={alumniLogo}
                alt="phone"
                className="h-full w-full object-cover"
            />
            </div>

            {/* Right Form Section */}
            <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-6">Sign In</h2>

            <form>
                {/* Email Input */}
                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <input
                    id="email"
                    type="email"
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
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                />
                </div>

                {/* Remember Me and Forgot Password */}
                <div className="flex justify-between items-center mb-4">
                <label className="inline-flex items-center">
                    <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Remember me</span>
                </label>
                <a href="#!" className="text-blue-600 hover:underline">Forgot password?</a>
                </div>

                {/* Sign In Button */}
                <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Sign In
                </button>
            </form>
            </div>

        </div>
        </div>
    );
    }

    export default Login;
