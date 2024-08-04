import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between">
          {/* Left side: Logo */}
          <div className="w-full md:w-1/4 text-center mb-6 md:mb-0">
            <a href="/" target="_self">
              <svg
                className="w-20 h-20 text-red-600 transform scale-110 translate-x-1 translate-y-1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FF6F6F', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#gradient1)" />
                <path
                  d="M50 15 L85 85 H15 Z"
                  fill="#FF0000"
                />
                <circle cx="50" cy="50" r="20" fill="#FF6F6F" />
              </svg>
            </a>
          </div>

          {/* Mobile Site & Apps */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">MOBILE SITE & APPS</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="flex items-center text-white">
                  <span className="mr-2">🔗</span>
                  <span>www.alumniconnectcvr.com</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" target="_blank" rel="noreferrer" className="flex items-center text-white">
                  <span className="mr-2">📱</span>
                  <span>Android</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" target="_blank" rel="noreferrer" className="flex items-center text-white">
                  <span className="mr-2">🍎</span>
                  <span>iOS</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us On */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">FOLLOW US ON</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" title="Facebook" target="_blank" rel="noreferrer" className="flex items-center text-white">
                  <span className="mr-2">🔵</span>
                  <span>Facebook</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" title="Twitter" target="_blank" rel="noreferrer" className="flex items-center text-white">
                  <span className="mr-2">🐦</span>
                  <span>Twitter</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" title="YouTube" target="_blank" rel="noreferrer" className="flex items-center text-white">
                  <span className="mr-2">▶️</span>
                  <span>YouTube</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" title="Pinterest" target="_blank" rel="noreferrer" className="flex items-center text-white">
                  <span className="mr-2">📌</span>
                  <span>Pinterest</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">COMPANY</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/careers" className="text-white">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/info/advertise" className="text-white">Advertise</a>
              </li>
              <li className="mb-2">
                <a href="/info/privacy" rel="nofollow" className="text-white">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/info/termsofuse" rel="nofollow" className="text-white">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6">
          © 2024 alumniconnectcvr.com, CVR College of Engineering. All rights reserved |
          <a href="http://www.cvr.ac.in/" target="_blank" rel="noreferrer" className="text-white ml-1">
            CVR College of Engineering
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
