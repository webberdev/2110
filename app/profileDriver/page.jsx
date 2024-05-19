import Image from 'next/image';
import driver01 from '/public/driver01.png';
import starRating from '/public/star-rating.png';

export default function profileDriver() {
  return (
    <div className="flex">
      <article className="flex flex-col max-w-lg mx-auto">
        <h1 className="font-bold text-3xl mt-8 mb-2 mx-auto">
          Hello, I&apos;m Your Driver
        </h1>
        <div className="h-2 w-28 bg-blue-700 mb-6"></div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl">
          <div className="m-5">
            <Image className="shadow-lg rounded-full" src={driver01} alt="" />
          </div>

          <div className="p-5">
            <h5 className="-mb-1 text-2xl font-bold tracking-tight text-gray-900">
              Ryan Reynolds
            </h5>

            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              Hi there, nice to meet you
            </p>
            <Image src={starRating} className="w-24" />
            <span className="inline">4.9</span>
            <hr className="my-3" />
            <p className="-mb-1">
              <span className="font-bold">Make &nbsp; &nbsp; &nbsp;</span>{' '}
              Toyota
            </p>
            <p className="-mb-1">
              <span className="font-bold">Model &nbsp; &nbsp;</span> Corolla
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
            <a
              href="/dashRider"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-lime-300">
              Send Request! &rarr;
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
