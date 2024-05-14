import Image from 'next/image';
import Button from '../components/button';
import map01 from './img/map01.png';
import pro01 from './img/profile01.png';
import pro02 from './img/profile02.png';
import pro03 from './img/profile03.png';

export default function TripCard() {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image class="rounded-t-lg" src={map01} alt="" />
      </a>
      <div class="p-5">
        <div className="flex">
          <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white mr-auto">
            Trip 1
          </h5>
          <div className="flex flex-row gap-1">
            <Image
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={pro01}
              alt="avatar"
            />
            <Image
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={pro02}
              alt="avatar"
            />
            <Image
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={pro03}
              alt="avatar"
            />
          </div>
        </div>

        <hr className="my-4" />

        <div
          class="inline-flex rounded-md items-center justify-center gap-x-0.5 mb-3"
          role="group">
          {/* <h5 className="flex items-center justify-center mr-8  text-orange-600">
            Schedule:
          </h5> */}
          <div class="px-2 py-0 text-sm font-bold flex items-center justify-center text-sky-500 bg-white border border-gray-200 rounded-full hover:text-blue-700">
            Mon
          </div>
          <div class="px-2 py-0 text-sm font-bold flex items-center justify-center text-sky-500 bg-white border border-gray-200 rounded-full hover:text-blue-700">
            Tue
          </div>
          <div class="px-2 py-0 text-sm font-bold flex items-center justify-center text-sky-500 bg-white border border-gray-200 rounded-full hover:text-blue-700">
            Wed
          </div>
        </div>

        <div className="mb-1">
          <h5 className="inline-flex items-center justify-cente text-orange-700">
            Dep: &nbsp;
          </h5>
          <span className="font-bold">7:00am</span>
          <p className="-mt-1">299 Abercrombie Street, Darlington NSW</p>
        </div>

        <div className="mb-4">
          <h5 className="inline-flex items-center justify-cente text-orange-700">
            Arr: &nbsp;
          </h5>
          <span className="font-bold">8:30am</span>
          <p className="-mt-1">Central Station, Eddy Avenue Sydney NSW</p>
        </div>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Edit Trip &rarr;
        </a>
      </div>
    </div>
  );
}
