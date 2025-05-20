import React, { useState } from "react";
import country from "./Components/CountryData";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Hero from "./Components/Hero";
function App() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [rand, setRand] = useState(Math.floor(Math.random() * country.length));
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(8);

  function loadMore() {
    setLoad(load + 8);
  }
  const showSection = () => {
    setShow(!show);
    setRand(Math.floor(Math.random() * country.length));
  };

  function haveaLook() {
    window.scrollBy({
      top: 600,
      behavior: "smooth",
    });
  }

  const filteredCountries = region
    ? country.filter((item) => item.region === region)
    : country;

  const searchedCountries = filteredCountries.filter((item) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return item.name.toLowerCase().includes(searchLower);
  });

  return (
    <div className="bg-[#eee] dark:bg-blue-950">
      <Navbar setRegion={setRegion} country={country} />
      <Hero
        country={country}
        rand={rand}
        setRand={setRand}
        setSearch={setSearch}
        show={show}
        showSection={showSection}
        haveaLook={haveaLook}
      />
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-20">
        {searchedCountries.length > 0
          ? searchedCountries
              .slice(0, load)
              .map((item) => (
                <Cards
                  search={search}
                  region={region}
                  key={item.alpha3Code}
                  {...item}
                />
              ))
          : "no countries found"}
      </div>
      {country.length > load && (
        <div className="flex items-center justify-center mt-10">
  <button
    onClick={loadMore}
    className="relative group overflow-hidden py-3 px-10 rounded-2xl font-semibold text-white text-lg transition-all duration-300 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-fuchsia-900 shadow-xl hover:shadow-fuchsia-500/60 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-fuchsia-400/60"
  >
    <span className="relative z-10 flex items-center gap-2">
      <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      Load More
    </span>
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    <div className="absolute inset-0 w-full h-full transform scale-0 group-hover:scale-150 transition-transform duration-500 ease-out bg-white opacity-5 rounded-full"></div>
  </button>
</div>

      )}
    </div>
  );
}

export default App;
