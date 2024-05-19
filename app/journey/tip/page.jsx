import Image from 'next/image';
import driver01 from '/public/driver02.png';
import starRating from '/public/star-rating.png';

export default function profileDriver() {
  return (
    <div className="flex">
      <article className="flex flex-col max-w-lg mx-auto">
        <h1 className="font-bold text-3xl mt-8 mb-2 mx-auto">
          Did you enjoy your trip?
        </h1>
        <div className="h-2 w-28 bg-blue-700 mb-6"></div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl">
          <div className="m-5">
            <Image className="shadow-lg rounded-full" src={driver01} alt="" />
          </div>

          <div className="p-5">
            <h5 className="-mb-1 text-2xl font-bold tracking-tight text-gray-900">
              Anne Grande
            </h5>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              Hi there, nice to meet you
            </p>
            <Image src={starRating} className="w-24" />
            <span className="inline">4.9</span>
            <hr className="my-3" />
            <div className="flex flex-row gap-6">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Tip Amount
                </label>
                <input
                  type="number"
                  id="number"
                  placeholder="$5:00"
                  className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Rating
                </label>
                <input
                  type="number"
                  id="number"
                  placeholder="5"
                  className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div>
            <a
              href="/dashRider"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-lime-300">
              Confirm
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
