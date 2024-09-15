import React, { useState } from "react";
import '../App.css'; // Add your custom styles here if needed.

const topics = [
  "Cloud Computing",
  "Data Science",
  "MERN",
  "Cyber Security",
  "Internet Of Things",
  "Testing",
  "Development",
  "Java",
  "Python",
  "C++"
];

const Interests = () => {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleCardClick = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((item) => item !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold mt-8">Select Your Topics</h1>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {topics.map((topic) => (
          <div
            key={topic}
            onClick={() => handleCardClick(topic)}
            className={`p-4 w-48 h-32 rounded-md flex items-center justify-center text-white font-semibold cursor-pointer transition-transform transform hover:scale-105
            ${selectedTopics.includes(topic) ? "bg-blue-600" : "bg-gray-800"}`}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
