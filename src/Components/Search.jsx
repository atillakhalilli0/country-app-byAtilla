import React from "react";

function Search({setSearch}) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search countries..."
        className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300 w-72 shadow-sm text-black bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:scale-105 dark:bg-blue-500 dark:hover:bg-blue-600">
        Search
      </button>
    </div>
  );
}

export default Search;
