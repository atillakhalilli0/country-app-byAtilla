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

  const showSection = () => {
    setShow(!show);
    setRand(Math.floor(Math.random() * country.length))
  };

  function haveaLook(){
    window.scrollBy({
      top: 600,
      behavior: "smooth",
    })
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
          ? searchedCountries.map((item) => (
              <Cards
                search={search}
                region={region}
                key={item.alpha3Code}
                {...item}
              />
            ))
          : "no countries found"}
      </div>
    </div>
  );
}

export default App;
