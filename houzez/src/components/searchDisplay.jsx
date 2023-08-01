// import React, { useState, useEffect } from "react";

// const SearchDisplay = ({ listing }) => {
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     setSearchResults(listing);
//   }, [listing]);

//   return (
//     <div>
//       {searchResults.length === 0 ? (
//         <p>No listings found.</p>
//       ) : (
//         searchResults.map((item) => (
//           <div key={item.id}>
//             {/* Display the data as you desire */}
//             <p>{item.data.propertyName}</p>
//             {/* ... Other data fields */}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default SearchDisplay;

// import React, { useState, useEffect } from "react";

// const SearchDisplay = ({ listing }) => {
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     setSearchResults(listing);
//   }, [listing]);

//   return (
//     <div>
//       {listing && listing.length === 0 ? (
//         <p>No listings found.</p>
//       ) : (
//         searchResults.map((item) => (
//           <div key={item.id}>
//             {/* Display the data as you desire */}
//             <p>{item.data.propertyName}</p>
//             {/* ... Other data fields */}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default SearchDisplay;

// import React from "react";

// const SearchDisplay = ({ listing }) => {
//   if (!listing || listing.length === 0) {
//     // If the listing is empty or undefined, display a loading message or a placeholder
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       {/* Assuming 'listing' is an array of objects, we can map through it to display each item */}
//       {listing.map((item) => (
//         <div key={item.id}>
//           {/* Display the data as you desire */}
//           <p>{item.data.propertyName}</p>
//           {/* ... Other data fields */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchDisplay;

// import React, { useState, useEffect } from "react";

// const SearchDisplay = ({ listing }) => {
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // Update the component state when the 'listing' prop changes
//     setSearchResults(listing);
//   }, [listing]);

//   if (searchResults.length === 0) {
//     // If the search results are empty, display a loading message or a placeholder
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       {/* Assuming 'searchResults' is an array of objects, we can map through it to display each item */}
//       {searchResults.map((item) => (
//         <div key={item.id}>
//           {/* Display the data as you desire */}
//           <p>{item.data.propertyName}</p>
//           {/* ... Other data fields */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchDisplay;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchDisplay = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const listingsData = queryParams.get("listings");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (listingsData) {
      const parsedListings = JSON.parse(decodeURIComponent(listingsData));
      setSearchResults(parsedListings);
    }
  }, [listingsData]);

  if (searchResults.length === 0) {
    // If the search results are empty, display a loading message or a placeholder
    return <p>Loading...</p>;
  }

  return (
    <div>
      {searchResults.map((item) => (
        <div key={item.id}>
          {/* Display the data as you desire */}
          <p>{item.data.propertyName}</p>
          {/* ... Other data fields */}
        </div>
      ))}
    </div>
  );
};

export default SearchDisplay;
