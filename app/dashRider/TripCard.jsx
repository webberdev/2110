import Image from 'next/image';
import Button from '../components/button';
import map01 from './img/map01.png';

export default function TripCard() {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-all">
      <a href="#">
        <Image class="rounded-t-lg" src={map01} alt="" />
      </a>
      <div class="p-5">
        <div className="flex">
          <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white mr-auto">
            Trip 1
          </h5>
          <div className="flex flex-row gap-1"></div>
        </div>

        <hr className="my-4" />

        <div
          class="inline-flex rounded-md items-center justify-center gap-x-0.5 mb-3"
          role="group">
          {/* <h5 className="flex items-center justify-center mr-8  text-purple-600">
            Schedule:
          </h5> */}
          <div class="px-2 py-0 text-sm font-bold flex items-center justify-center text-sky-500 bg-white border border-gray-200 rounded-full hover:text-purple-700">
            Mon
          </div>
          <div class="px-2 py-0 text-sm font-bold flex items-center justify-center text-sky-500 bg-white border border-gray-200 rounded-full hover:text-purple-700">
            Tue
          </div>
          <div class="px-2 py-0 text-sm font-bold flex items-center justify-center text-sky-500 bg-white border border-gray-200 rounded-full hover:text-purple-700">
            Wed
          </div>
        </div>

        <div className="mb-1">
          <h5 className="inline-flex items-center justify-cente text-purple-700">
            Dep: &nbsp;
          </h5>
          <span className="font-bold">7:00am</span>
          <p className="-mt-1">299 Abercrombie Street, Darlington NSW</p>
        </div>

        <div className="mb-4">
          <h5 className="inline-flex items-center justify-cente text-purple-700">
            Arr: &nbsp;
          </h5>
          <span className="font-bold">8:30am</span>
          <p className="-mt-1">Central Station, Eddy Avenue Sydney NSW</p>
        </div>
        <a
          href="/request Sent!"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
          Request to Join &rarr;
        </a>
      </div>
    </div>
  );
}
