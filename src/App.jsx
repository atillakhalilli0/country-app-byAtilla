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
            className="relative group overflow-hidden py-3 px-8 rounded-2xl font-semibold text-white text-lg transition-all duration-300 bg-gradient-to-r from-indigo-700 via-purple-600 to-fuchsia-700 dark:from-blue-950 dark:via-purple-900 dark:to-blue-950 shadow-lg shadow-purple-500/40 hover:shadow-fuchsia-500/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/50"
          >
            <span className="relative z-10">Load More</span>
            <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
