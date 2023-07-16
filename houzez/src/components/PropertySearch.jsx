import React from "react";

const PropertySearch = ({ property }) => {
  const { address, bathrooms, bedrooms, description, discountedPrice, furnished, geolocation, imgUrls, propertyName, realtorName, regularPrice, type } = property;

  return (
    <div className="property">
      <div className="property-images">
        {imgUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Property ${index + 1}`} />
        ))}
      </div>
      <div className="property-details">
        <h2>{propertyName}</h2>
        <p>Bedrooms: {bedrooms}</p>
        <p>Bathrooms: {bathrooms}</p>
        <p>Location: {address}</p>
        <p>Description: {description}</p>
        <p>Realtor: {realtorName}</p>
        <p>Type: {type}</p>
        <p>Regular Price: {regularPrice}</p>
        <p>Discounted Price: {discountedPrice}</p>
        <p>Furnished: {furnished ? "Yes" : "No"}</p>
        <p>
          Geolocation: Lat: {geolocation.lat}, Lng: {geolocation.lng}
        </p>
      </div>
    </div>
  );
};

export default PropertySearch;
