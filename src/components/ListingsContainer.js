import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteListing}) {
  
  const displayListings = listings.map((listing) =>{
    return <ListingCard 
            key={listing.id}
            listing={listing}
            onDeleteListing={onDeleteListing}/>
  })

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
