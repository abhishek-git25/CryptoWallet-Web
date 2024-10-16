
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 h-[calc(100vh-100px)]">
      <h1 className="text-3xl font-bold mb-8">Welcome to Wallety</h1>

      <div className="space-y-4">
        {/* Create Wallet Button */}
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
          Create Wallet
        </button>

        {/* Import Wallet Button */}
        <button className="border border-white text-white mx-5 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:text-black">
          Import Wallet
        </button>
      </div>
    </div>
  );
};

export default Home;
