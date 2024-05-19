import Image from 'next/image';
import map01 from '../img/map01.png';

export default function JourneyCard() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-xl transition-all">
      <a href="#">
        <Image className="rounded-t-lg" src={map01} alt="" />
      </a>
      <div className="p-5">
        <div className="flex">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900  mr-auto">
            <span className="text-sm">ETA:</span> Arrived!
          </h5>
          <div className="flex flex-row gap-1"></div>
        </div>

        <hr className="my-4" />

        <div
          className="inline-flex rounded-md items-center justify-center gap-x-0.5 mb-3"
          role="group">
          {/* <h5 className="flex items-center justify-center mr-8  text-purple-600">
            Schedule:
          </h5> */}
          <div className="px-2 py-0 text-sm font-bold flex items-center justify-center text-sky-500 bg-blue-100 border border-blue-500 rounded-full hover:text-purple-700">
            Mon
          </div>
          <div className="px-2 py-0 text-sm font-bold flex items-center justify-center text-sky-500 bg-white border border-gray-200 rounded-full hover:text-purple-700">
            Tue
          </div>
          <div className="px-2 py-0 text-sm font-bold flex items-center justify-center text-sky-500 bg-white border border-gray-200 rounded-full hover:text-purple-700">
            Wed
          </div>
        </div>

        <div className="mb-1">
          <h5 className="inline-flex items-center justify-cente text-purple-700">
            Pick up location: &nbsp;
          </h5>
          <span className="font-bold">7:00am</span>
          <p className="-mt-1">299 Abercrombie Street, Darlington NSW</p>
        </div>

        <div className="mb-4">
          <h5 className="inline-flex items-center justify-cente text-purple-700">
            Destination: &nbsp;
          </h5>
          <span className="font-bold">8:30am</span>
          <p className="-mt-1">Central Station, Eddy Avenue Sydney NSW</p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="/journey/tip"
            className="inline-flex mx-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 ">
            Tip Driver &rarr;
          </a>
          <a
            href="/dashRider"
            className="inline-flex mx-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 ">
            Complete Trip
          </a>
        </div>
      </div>
    </div>
  );
}
