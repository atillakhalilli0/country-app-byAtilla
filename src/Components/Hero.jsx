import React from "react";
import Search from "./Search";
import RandCountry from "./RandCountry";
function Hero({ showSection, haveaLook, show, rand, setRand, setSearch, country }) {
   return (
      <div className="h-full mt-[60px] flex justify-center items-center text-center text-white bg-gradient-to-r from-indigo-700 via-purple-600 to-fuchsia-700 dark:from-blue-950 dark:via-purple-900 dark:to-blue-950 shadow-xl p-10 transition-all duration-500">
         <div className="w-[85%] mx-auto flex max-lg:flex-col justify-between items-center">
            <div>
               <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white dark:text-white">Welcome to Country App</h1>
               <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 mb-8">You can find all data about 250 countries.</p>

               <div className="flex flex-wrap justify-center gap-6 mt-4">
                  <button onClick={() => haveaLook()} className="uppercase py-3 px-8 bg-white text-indigo-700 dark:bg-gray-200 dark:text-indigo-800 font-semibold rounded-xl hover:bg-indigo-300 dark:hover:bg-gray-300 transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer">
                     Have a look
                  </button>
                  <button onClick={() => showSection()} className="uppercase py-3 px-8 bg-fuchsia-600 dark:bg-indigo-600 text-white font-semibold rounded-xl hover:bg-fuchsia-400 dark:hover:bg-indigo-500 transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer">
                     Search country
                  </button>
               </div>
            </div>

            <div>{show ? <Search setSearch={setSearch} /> : <RandCountry rand={rand} setRand={setRand} country={country} />}</div>
         </div>
      </div>
   );
}

export default Hero;
