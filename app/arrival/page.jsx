import Image from 'next/image';
import rider01 from '/public/rider01.png';
import starRating from '/public/star-rating.png';

export default function profileRider() {
  return (
    <div className="flex">
      <article className="flex flex-col max-w-lg mx-auto">
        <h1 className="font-bold text-2xl mt-8 mb-2 mx-auto">
          Your driver are on their way
        </h1>
        <div className="h-2 w-28 bg-orange-600 mb-6"></div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl">
          <a
            href="/dashDriver"
            className="inline-flex underline items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-white-400 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-lime-300">
            &larr; Back
          </a>
          <div className="m-5">
            <Image className="shadow-lg rounded-full" src={rider01} alt="" />
          </div>

          <div className="p-5">
            <h5 className="-mb-1 text-2xl font-bold tracking-tight text-gray-900">
              Amelia Wren Shiloh
            </h5>

            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              I&apos;d like to join your commute
            </p>

            <span className="inline">4.9</span>
            <hr className="my-3" />
            <p className="-mb-1">
              <span className="font-bold">Trip &nbsp; &nbsp; &nbsp;</span> 1
            </p>
            <p className="-mb-1">
              <span className="font-bold">Days &nbsp; &nbsp;</span>

              <span
                className="inline-flex rounded-md items-center justify-center gap-x-0.5 mb-3"
                role="group">
                {/* <h5 className="flex items-center justify-center mr-8  text-green-600">
            Schedule:
          </h5> */}
                <span className="px-2 py-0 text-sm font-bold flex items-center justify-center text-yellow-600 bg-white border border-gray-200 rounded-full hover:text-yellow-700">
                  Mon
                </span>
                <span className="px-2 py-0 text-sm font-bold flex items-center justify-center text-yellow-600 bg-white border border-gray-200 rounded-full hover:text-yellow-700">
                  Tue
                </span>
                <span className="px-2 py-0 text-sm font-bold flex items-center justify-center text-yellow-600 bg-white border border-gray-200 rounded-full hover:text-yellow-700">
                  Wed
                </span>
              </span>
            </p>
            <p className="-mb-1">
              <span className="font-bold">On Board &nbsp; &nbsp;</span>
              7:30AM 123 ABC Street, Sydney
            </p>
            <p className="-mb-1">
              <span className="font-bold">Destination &nbsp; &nbsp;</span>
              Wynard Station
            </p>
            <div className="mb-4 mt-2">
              <span className="flex flex-row content-center font-bold mb-1">
                Occupancy &nbsp; &nbsp;
              </span>
              <div className="flex flex-row content-center gap-1">
                <div class="w-4 h-4 bg-lime-700 rounded-full"></div>
                <div class="w-4 h-4 bg-lime-700 rounded-full"></div>
                <div class="w-4 h-4 bg-lime-700 rounded-full"></div>
                <div class="w-4 h-4 bg-lime-300 rounded-full"></div>
                <div class="w-4 h-4 bg-lime-300 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-row">
              <a
                href="/dashDriver"
                className="inline-flex mr-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-lime-300">
                Deny
              </a>
              <a
                href="/dashDriver"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-lime-300">
                Accept Request!
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
