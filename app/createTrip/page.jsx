'use client';
import { useState } from 'react';
import Image from 'next/image';
import CreateTripContent from './CreateTripContent';
import ConfirmTrip from './ConfirmTrip';
import map01 from './img/map01.png';
import map02 from './img/map02.png';

export default function CreateTrip() {
  const [page, setPage] = useState(1);

  const handleClick = (e) => {
    e.preventDefault();
    setPage(2);
  };
  return (
    <div>
      <article className="max-w-lg mx-auto md:max-w-5xl">
        <h1 className="font-black text-4xl my-4 mx-5 md:text-center">
          {page === 1 && 'Create a New Trip'}
          {page === 2 && 'Confirm Trip'}
        </h1>
        {page === 1 && (
          <Image
            src={map01}
            alt="map"
            className="h-80 object-cover rounded-xl fade-in-3s"
          />
        )}
        {page === 2 && (
          <Image
            src={map02}
            alt="map"
            className="fade-in-3s h-80 object-cover rounded"
          />
        )}

        <form className={`${page === 2 && 'hidden'} max-w-sm mx-auto mt-3`}>
          <CreateTripContent />
          <button
            type="submit"
            onClick={handleClick}
            className="text-white md:inline bg-blue-700 hover:cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Evaluate &rarr;
          </button>
        </form>

        <div
          className={`${page === 1 && 'hidden'} fade-in-1s max-w-sm mx-auto mt-3`}>
          <ConfirmTrip />
        </div>
      </article>
    </div>
  );
}
