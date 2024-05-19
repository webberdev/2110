'use client';
import TripCard from './TripCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function WorkAround() {
  const route = useRouter();
  const handleClick = (e) => {
    route.push('/createTrip');
  };

  return (
    <div className="max-w-max mx-auto fade-in-3s">
      <h1 className="text-2xl font-bold mb-4">Your Scheduled Trips</h1>
      <div className="flex flex-col items-start gap-3 ">
        <Link
          href="/createTrip"
          className="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Requests &nbsp; &nbsp;
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-600">
            1
          </div>
        </Link>
        <Link
          href="/createTrip"
          className="mb-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Create New Trip &#43;
        </Link>
      </div>
      <hr className="md:mt-4 md:mb-10 mb-4" />
      <div className="md:grid md:grid-cols-2 flex flex-col md:content-center gap-6 mt-2 md:min-w-full">
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
      </div>
    </div>
  );
}
