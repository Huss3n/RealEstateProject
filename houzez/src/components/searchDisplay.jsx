import React, { useState } from "react";
// import DataFetcher from "./DataFetcher";

const SearchComponent = (props) => {
  let data = props.listings;
  const [searchResults, setSearchResults] = useState([]);

  const handleDataFetched = (data) => {
    setSearchResults(data);
  };

  // Your search component logic, including the search function that triggers the fetching

  return (
    <div>
      {/* Your search component UI and logic here */}
      {/* <DataFetcher onDataFetched={handleDataFetched} /> */}
      {/* Use 'searchResults' in this component to display the fetched data */}
    </div>
  );
};

export default SearchComponent;
