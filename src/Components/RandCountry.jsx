import React from "react";

function RandCountry({ rand, country }) {
  console.log(rand);
  const item = country[rand];
  return (
    <div className="w-[85%] mx-auto flex justify-center items-center my-20">
      <div className="max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-[0px_15px_24px_10px_rgba(66,68,90,1)] dark:hover:shadow-[0px_15px_24px_10px_rgba(255,255,255,0.6)] hover:-translate-y-3 transition-all duration-400">
        <a href="#">
          <img
            className="rounded-t-lg object-cover w-[450px] h-[200px]"
            src={item.flag}
            alt={item.name}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            Capital: {item.capital} <br />
            Region: {item.region} <br />
            Borders: {item.borders ? item.borders.join(", ") : "None"} <br />
            Population: {item.population} <br />
            Area: {item.area} km
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RandCountry;
