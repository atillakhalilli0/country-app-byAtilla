import { Navigate, useParams } from "react-router-dom";
import Cards from "./Cards";

function Home({ load, country, search }) {
   const { region } = useParams();

   const filteredCountries = region ? country.filter((item) => item.region.toLowerCase() === region.toLowerCase()) : country;

   const searchedCountries = filteredCountries.filter((item) => {
      if (!search) return true;
      const searchLower = search.toLowerCase();
      return item.name.toLowerCase().includes(searchLower);
   });

   return (
      <>
         <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-20">{searchedCountries.length > 0 ? searchedCountries.slice(0, load).map((item) => <Cards search={search} region={region} key={item.alpha3Code} {...item} />) : <Navigate to="/notfound" />}</div>
      </>
   );
}

export default Home;
