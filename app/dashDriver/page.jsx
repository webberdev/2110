'use client';
import TripCard from './TripCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function page() {
  const route = useRouter();
  const handleClick = (e) => {
    route.push('/createTrip');
  };
  return (
    <>
      <div className="max-w-max mx-auto">
        <h1 className="text-2xl font-bold mb-4">Your Scheduled Trips</h1>
        <Link
          href="/createTrip"
          class="mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Create New Trip &#43;
        </Link>
        <div className="md:grid md:grid-cols-2 flex flex-col md:content-center gap-6 mt-2 md:min-w-full">
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </div>
    </>
  );
}
