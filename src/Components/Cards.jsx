import { Link } from "react-router-dom";

function Cards({ flag, name, capital, region, borders, population, area, alpha3Code }) {
   return (
      <div className="max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-[0px_15px_24px_10px_rgba(66,68,90,1)] dark:hover:shadow-[0px_15px_24px_10px_rgba(255,255,255,0.6)] hover:-translate-y-3 transition-all duration-400">
         <Link to={`/details/${alpha3Code}`}>
            <img className="rounded-t-lg object-cover w-full h-[200px]" src={flag} alt={name} />
         </Link>
         <div className="p-5">
            <Link to={`/details/${alpha3Code}`}>
               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
               Capital: {capital} <br />
               Region: {region} <br />
               Borders: {borders ? borders.join(", ") : "None"} <br />
               Population: {population} <br />
               Area: {area} km
            </p>
            <Link to={`/details/${alpha3Code}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Read more
               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
            </Link>
         </div>
      </div>
   );
}

export default Cards;
