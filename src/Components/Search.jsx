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
        className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300 max-w-72 shadow-sm text-black bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />
    </div>
  );
}

export default Search;
