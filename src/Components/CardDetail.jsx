import React from "react";
import { Navigate, useParams } from "react-router-dom";

function CardDetail({ country }) {
   const { alpha3Code } = useParams();
   const selectedCountry = country.find((item) => item.alpha3Code === alpha3Code);

   if (!selectedCountry) {
      return <Navigate to="/notfound" />;
   }

   return (
      <div className="p-10 mt-30 max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
         <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{selectedCountry.name}</h2>
         <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-full h-64 object-cover rounded-lg mb-4" />
         <p className="text-gray-700 dark:text-gray-300">
            <strong>Capital:</strong> {selectedCountry.capital} <br />
            <strong>Region:</strong> {selectedCountry.region} <br />
            <strong>Borders:</strong> {selectedCountry.borders ? selectedCountry.borders.join(", ") : "None"} <br />
            <strong>Population:</strong> {selectedCountry.population} <br />
            <strong>Area:</strong> {selectedCountry.area} km²
         </p>
      </div>
   );
}

export default CardDetail;
