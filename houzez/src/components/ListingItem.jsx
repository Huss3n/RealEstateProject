import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
export default function ListingItem({ listing, id }) {
  return (
    <li className="relative bg-white flex flex-col justify-between items-center shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition duration-150 ease-in-out">
      <Link to={`/category/${listing.type}/${id}`}>
        <img src={listing.imgUrls[0]} alt="" className="h-[170px] w-full object-cover hover:scale-110 transition-scale duration-200 ease-in" loading="lazy" />
        <Moment className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg" fromNow>
          {listing.timestamp?.toDate()}
        </Moment>
        <div className="w-full p-[10px0">
          <div className="flex items-center space-x-1">
            <MdLocationPin className="h-4 w-4 text-green-600" />
            <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">{listing.address}</p>
          </div>
          <p className="font-semibold m-0 text-xl text-[#457b9d] truncate">{listing.propertyName}</p>
          <p className="mt-2 font-semibold text-[#457b9d]">
            Kshs
            {listing.offer ? listing.discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / Month"}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}</p>
              <FaBed />
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">{listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}</p>
              <GiBathtub />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
