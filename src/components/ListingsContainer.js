import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data))
  }, [])

    function handleDeleteListing(deletedListing) {
    const updatedListing = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListing)
  }
  const newListings = listings.map((listing) => (
    <ListingCard 
      key={listing.id}
      description={listing.description}
      img={listing.image}
      location={listing.location}
      listing={listing}
      onDeleteListing={handleDeleteListing}
    />
  ))
  
  return (
    <main>
      <ul className="cards">
        {newListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
