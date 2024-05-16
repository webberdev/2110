'use client';
import Link from 'next/link';
import '../globals.css';
import RiderSignUp from './RiderSignUp01';
import { useRouter } from 'next/navigation';

export default function DriverSignUP() {
  return (
    <div>
      <article className="max-w-lg mx-auto">
        <h1 className="font-black text-4xl my-8 mx-5">Driver Sign Up Page</h1>
        <div className="max-w-sm mx-auto">
          <RiderSignUp />
          <Link
            href="/dashRider"
            className="text-white bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
            rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next &rarr;
          </Link>
        </div>
      </article>
    </div>
  );
}
