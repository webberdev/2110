import Link from 'next/link';

export default function ConfirmTrip() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-0">Confirm Details</h1>
      <p className="mb-5 text-sm">All Details</p>
      <div className="mb-5">
        <label
          htmlFor="address1"
          className="block mb-2 text-sm font-medium text-green-900 dark:text-white">
          Start
        </label>
        <input
          type="text"
          id="address1"
          className="bg-lime-50  border-lime-300 text-green-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-lime-700 dark:border-lime-600 dark:placeholder-lime-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue="370 Abercrombie Street, Darlington NSW"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="address2"
          className="block mb-2 text-sm font-medium text-green-900 dark:text-white">
          Destination
        </label>
        <input
          type="text"
          id="address2"
          className="bg-lime-50  border-lime-300 text-green-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-lime-700 dark:border-lime-600 dark:placeholder-lime-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue="Wynard Station"
        />
      </div>
      <div className="flex mb-8 gap-3">
        <div className="mb-5 mr-auto">
          <label
            htmlFor="time-start"
            className="block mb-2 text-sm font-medium text-green-800 dark:text-white">
            Start Time
          </label>
          <input
            type="time"
            id="time-start"
            className="bg-lime-50  border-lime-300 text-green-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-lime-700 dark:border-lime-600 dark:placeholder-lime-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue="07:00"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="time-end"
            className="block mb-2 text-sm font-medium text-green-800 dark:text-white">
            Arrival Time
          </label>
          <input
            type="time"
            id="time-end"
            className="bg-lime-50  border-lime-300 text-green-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-lime-700 dark:border-lime-600 dark:placeholder-lime-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue="08:30"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-green-800 dark:text-white">
            Max Occupants
          </label>
          <input
            type="number"
            id="number"
            className="bg-lime-50  border-lime-300 text-green-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-lime-700 dark:border-lime-600 dark:placeholder-lime-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue="2"
            min="0"
            max="4"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <Link
          href="/dashDriver"
          className="text-white md:inline bg-green-700 hover:cursor-pointer hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Confirm &rarr;
        </Link>
        <Link
          href="/dashDriver"
          className="text-white ml-auto md:inline bg-red-700 hover:cursor-pointer hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          Cancel &#10006;
        </Link>
      </div>
    </div>
  );
}
