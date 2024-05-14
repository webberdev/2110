'use client';
import { useState } from 'react';
import '../globals.css';
import DriverSignUp01 from './DriverSignUp01';
import DriverSignUp02 from './DriverSignUp02';

export default function DriverSignUP() {
  const [page, setPage] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (page === 1) {
      setPage(2);
    }
  };
  return (
    <div>
      <article className="max-w-lg mx-auto">
        <h1 className="font-black text-4xl my-8 mx-5">Driver Sign Up Page</h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          {page === 1 && <DriverSignUp01 />}
          {page === 2 && <DriverSignUp02 />}

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next &rarr;
          </button>
        </form>
      </article>
    </div>
  );
}
