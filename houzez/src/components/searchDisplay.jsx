// import { useLocation } from "react-router-dom";
// import PropertySearch from "./PropertySearch";

// function SearchDisplay() {
//   const location = useLocation();
//   const searchResults = location.state;

//   if (!searchResults) {
//     // Handle the case when no search results are available
//     console.log(PropertySearch.listing);
//     return <div>No search results found.</div>;
//   }

//   // Render the search results
//   return (
//     <div>
//       <h1>Search Results</h1>
//       {searchResults.map((listing) => (
//         <PropertySearch key={listing.id} listing={listing.data} />
//       ))}
//     </div>
//   );
// }
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchComponent() {
  const location = useLocation();
  const searchResults = location.state && location.state.searchResults;

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div>
      <h1>Search Page</h1>
      {/* Render the search results */}
    </div>
  );
}

export default SearchComponent;
