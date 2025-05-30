import { Navigate, useParams, Link } from "react-router-dom";

function CardDetail({ country }) {
   const { alpha3Code } = useParams();
   const selectedCountry = country.find((item) => item.alpha3Code === alpha3Code);

   if (!selectedCountry) {
      return <Navigate to="/notfound" />;
   }

   return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] dark:bg-blue-950 px-4 py-10">
         <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full flex flex-col lg:flex-row">
            <div className="w-full h-64 lg:h-auto">
               <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 flex flex-col justify-center lg:w-1/2 relative">
               <h2 className="text-4xl mt-5 font-extrabold text-gray-900 dark:text-white mb-6">{selectedCountry.name}</h2>

               <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg mb-6">
                  <li>
                     <span className="font-semibold">Capital:</span> {selectedCountry.capital}
                  </li>
                  <li>
                     <span className="font-semibold">Region:</span> {selectedCountry.region}
                  </li>
                  <li>
                     <span className="font-semibold">Borders:</span>{" "}
                     <p className="flex flex-wrap gap-y-2">
                        {selectedCountry.borders?.length
                           ? selectedCountry.borders.map((border) => (
                                <Link key={border} to={`/details/${border}`} className="inline-block text-sm font-medium bg-indigo-600 dark:bg-indigo-700 text-white dark:text-white px-3 py-1 rounded-full mr-2 hover:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300">
                                   {border}
                                </Link>
                             ))
                           : "None"}
                     </p>
                  </li>
                  <li>
                     <span className="font-semibold">Population:</span> {selectedCountry.population}
                  </li>
                  <li>
                     <span className="font-semibold">Area:</span> {selectedCountry.area} km²
                  </li>
               </ul>

               <Link to="/" className="absolute top-2 right-3 mt-auto inline-block text-center hover:bg-indigo-700 text-indigo-500 hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out dark:hover:bg-indigo-600">
                  Back Home
               </Link>
            </div>
         </div>
      </div>
   );
}

export default CardDetail;
