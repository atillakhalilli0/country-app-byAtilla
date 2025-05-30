import { Link } from "react-router-dom";

function NotFound() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#eee] dark:bg-blue-950 text-gray-800 dark:text-white px-4">
         <div className="mb-8">
            <svg fill="currentColor" height="100" width="100" viewBox="0 0 24 24" className="text-red-500 dark:text-red-400">
               <path d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm6.364 16.95l-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05l1.414-1.414L12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95z" />
            </svg>
         </div>

         <h1 className="text-6xl font-extrabold mb-3">404</h1>
         <p className="text-2xl mb-4 text-center">Not Found</p>
         <p className="mb-8 text-center max-w-md">There is no such region or country in this name.</p>

         <Link to="/" className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-lg hover:shadow-fuchsia-500/60 hover:scale-105 transition-transform dark:from-blue-900 dark:via-purple-900 dark:to-fuchsia-900">
            Back to HomePage
         </Link>
      </div>
   );
}

export default NotFound;
