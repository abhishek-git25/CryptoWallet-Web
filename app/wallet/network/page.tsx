"use client";
import { useState } from "react";

interface CardData {
  id: number;
  name: string;
  description: string;
}

const Network: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Example card data with images
  const cardData: CardData[] = [
    { id: 1, name: 'John Doe', description: 'This is the first card.' },
    { id: 2, name: 'Jane Smith', description: 'This is the second card.' },
    { id: 3, name: 'Chris Lee', description: 'This is the third card.' },
    { id: 4, name: 'Alice Johnson', description: 'This is the fourth card.' },
  ];

  // Function to filter cards based on the search term
  const filteredCards = cardData.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 flex flex-col items-center">
      <div className="mb-6 w-full md:w-1/2 sticky top-[100">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6  max-h-96 overflow-y-auto hide-scrollbar p-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="flex items-center p-6 rounded-lg card-shadow hover: transition-shadow duration-300 mb-9"
          >
            {/* Image */}
            {/* <img
              src={card.imageUrl}
              alt={card.name}
              className="w-16 h-16 rounded-full mr-4"
            /> */}

            {/* Text Content (Name and Description) */}
            <div>
              <h2 className="text-xl font-semibold mb-1">{card.name}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredCards.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No cards found.</p>
      )}
    </div>
  );
};

export default Network;
