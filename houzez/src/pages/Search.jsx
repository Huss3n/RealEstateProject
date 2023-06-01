import React from "react";
import MiniNav from "../components/MiniNav";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  return (
    <>
      <div className="px-3 pt-4">
        <MiniNav />
      </div>
      <div>
        {/* Display the search results */}
        {searchResults.map((result) => (
          <div key={result.id}>
            {/* Display individual search result */}
            <h3>{result.data.propertyName}</h3>
            {/* ... */}
          </div>
        ))}
      </div>
    </>
  );
}
