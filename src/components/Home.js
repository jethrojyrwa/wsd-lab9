import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [catImage, setCatImage] = useState(null);

  const fetchCatImage = async () => {
    try {
        const response = await axios.get(`https://cataas.com/cat?timestamp=${new Date().getTime()}`);
      
      setCatImage(response.request.responseURL);
    } catch (error) {
      console.error("Error fetching cat image", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Cat Image</h1>
      <button onClick={fetchCatImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Fetch Cat Image
      </button>
      {catImage && (
        <div className="mt-4">
          <img src={catImage} alt="Cat" className="max-w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default Home;
