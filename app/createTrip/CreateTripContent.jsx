export default function CreateTripContent() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-0">Itinery</h1>
      <p className="mb-5 text-sm">Please fill in details </p>
      <div className="mb-5">
        <label
          htmlFor="address1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Start
        </label>
        <input
          type="text"
          id="address1"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue="370 Abercrombie Street, Darlington NSW"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="address2"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Destination
        </label>
        <input
          type="text"
          id="address2"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue="Wynard Station"
        />
      </div>
      <div className="flex mb-8 gap-3">
        <div className="mb-5 mr-auto">
          <label
            htmlFor="time-start"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            Start Time
          </label>
          <input
            type="time"
            id="time-start"
            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue="07:00"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="time-end"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            Arrival Time
          </label>
          <input
            type="time"
            id="time-end"
            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue="08:30"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            Max Occupants
          </label>
          <input
            type="number"
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue="2"
            min="0"
            max="4"
          />
        </div>
      </div>
    </div>
  );
}
