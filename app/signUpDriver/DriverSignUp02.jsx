import React from 'react';

export default function DriverSignUp02() {
  return (
    <div className="transition-opacity duration-500 opacity-100 fade-in-2s">
      <h1 className="font-bold text-2xl mb-3 ">Add Car Details</h1>
      <div className="mb-5">
        <label
          htmlFor="car-make"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Make
        </label>
        <input
          type="text"
          id="car-make"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="BMW"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="model"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Model
        </label>
        <input
          type="text"
          id="model"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="youremail@gmail.com"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="colour"
          className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
          Colour
        </label>
        <input
          type="text"
          id="colour"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="White"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Registration Plate
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ABC123"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="capacity"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Passenger Capacity
        </label>
        <input
          type="number"
          min="1"
          max="8"
          id="capacity"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ABC123"
        />
      </div>
    </div>
  );
}
