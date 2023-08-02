import Moment from "react-moment";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";

export default function SearchDisplay({ listing, id }) {
  return (
    <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-shadow duration-150 m-[10px]">
      <Link className="contents" to={`/category/${listing.type}/${id}`}>
        {/* property images  */}
        <img className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in" alt="" loading="lazy" src={listing.imgUrls[0]} />

        {/* time posted i.e duration */}
        <Moment className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg" fromNow>
          {listing.timestamp?.toDate()}
        </Moment>

        {/* propert location/ address  */}
        <div className="w-full p-[10px]">
          <div className="flex items-center space-x-1">
            {/* location icon  */}
            <MdLocationOn className="h-4 w-4 text-green-600" />
            {/* location name  */}
            <p className="font-semibold text-sm mb-[2px] text-gray-500 truncate">{listing.address}</p>
          </div>

          {/* property name  */}
          <p className="font-semibold m-0 text-xl truncate">{listing.propertyName}</p>

          {/* property value either rent or sale  */}
          <p className="text-[#457b9d] mt-2 font-semibold">
            Kshs
            {listing.offer ? listing.discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / month"}
          </p>

          {/* bedrooms and bathrooms  */}
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}</p>
              <FaBed className="sm:text-xs text-xl" />
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">{listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}</p>
              <GiBathtub className="sm:text-xs text-xl" />
            </div>
          </div>
        </div>

        {/* delete and edit functions  */}
      </Link>
    </li>
  );
}
