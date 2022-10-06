import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then(setListings);
  }, []);

  function handleDeleteListing(id) {
    const updatedListings = listings.filter((listing) => listing.id !==id); 
      setListings(updatedListings);
  }


  const searchDisplay = listings.filter((listing) => 
    listing.description.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer 
      listings={searchDisplay}
      onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
