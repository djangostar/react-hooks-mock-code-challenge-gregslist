import React, {useState} from "react";

function ListingCard({ listing, img, description, location, onDeleteListing }) {
  const [status, setStatus] = useState(false)
  
  function handleDeleteListingClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    }, [])
    .then((res) => res.json())
    .then(() => onDeleteListing(listing))
  }

  function handleStatusTrue() {
    setStatus(true)
  }

  function handleStatusFalse() {
    setStatus(false)
  }


   return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={img} alt={description} />
      </div>
      <div className="details">
        {status ? (
          <button onClick={handleStatusFalse} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleStatusTrue} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteListingClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
