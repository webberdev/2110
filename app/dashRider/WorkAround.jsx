'use client';
import TripCard from './TripCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function WorkAround() {
  const [showTrips, setShowTrips] = useState(false);
  const handleClick = (e) => {
    setShowTrips(true);
    console.log('hello');
  };

  return (
    <div className="max-w-max mx-auto">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-4 mt-6">
          Search Trips In Your Area
        </h1>
        <div className="mb-5">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Pick Up Address"
          />
        </div>
        <h2 className="text-lg font-bold mb-3">Favourites</h2>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            value=""
            id="radio-1"
            name="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label
            htmlFor="radio-1"
            className="ms-2 text-sm font-medium text-gray-900">
            321 George Street, Sydney, NSW 2000
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="radio"
            value=""
            id="radio-2"
            name="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-red-500"
          />
          <label
            htmlFor="radio-2"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            112 Elizabeth Street, Sydney, NSW 2000
          </label>
        </div>

        <button
          href="/createTrip"
          onClick={handleClick}
          className="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Search Trips &rarr;
        </button>
      </div>
      <hr className="md:my-10 my-4" />
      <div className={`fade-in-2s ${showTrips ? '' : 'hidden'}`}>
        <div
          className={` transition md:grid md:grid-cols-2 flex flex-col md:content-center gap-6 mt-2 md:min-w-full`}>
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </div>
    </div>
  );
}
