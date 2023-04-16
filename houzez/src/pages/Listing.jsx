import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import { FaShare, FaMapMarkerAlt, FaBed, FaBath, FaParking, FaChair } from "react-icons/fa";
import { getAuth } from "firebase/auth";
import Contact from "../components/Contact";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Listing() {
  const auth = getAuth();
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [contactLandlord, setContactLandlord] = useState(false);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    }
    fetchListing();
  }, [params.listingId]);
  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Swiper slidesPerView={1} navigation pagination={{ type: "progressbar" }} effect="fade" modules={[EffectFade]} autoplay={{ delay: 3000 }}>
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full overflow-hidden h-[300px]"
              style={{
                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* images and info div  */}
      <div
        //   share icon
        className="fixed top-[13%] right-[3%] z-10 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <FaShare className="text-lg text-slate-500" />
      </div>
      {shareLinkCopied && <p className="fixed top-[23%] right-[5%] font-semibold border-2 border-gray-400 rounded-md bg-white z-10 p-2">Link Copied</p>}

      {/* property details starts here  */}
      <div className="m-4 flex flex-col md:flex-row max-w-4xl lg:mx-auto p-4 rounded-lg shadow-lg bg-white lg:space-x-5 md:text-sm">
        <div className=" w-full ">
          {/* property price  */}
          <p className="sm:text-2xl text-xl font-bold mb-3 text-blue-900">
            {listing.propertyName} - Kshs{" "}
            {listing.offer ? listing.discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" ? " / month" : ""}
          </p>

          {/* property location  */}
          <p className="flex items-center mt-2 mb-3 font-semibold text-gray-700">
            <FaMapMarkerAlt className="text-green-700 mr-1" />
            {listing.address}
          </p>

          {/* sale button and discount  */}
          <div className="flex justify-start items-center space-x-4 w-[75%] mb-4">
            <p className="bg-red-700 sm:w-full w-7/12 max-w-[200px] rounded-xl p-1 text-white text-center font-semibold shadow-md text-sm">
              {listing.type === "rent" ? "Rent" : "Sale"}
            </p>

            {/* offer button  */}
            {listing.offer && (
              <p className="w-full max-w-[200px] bg-green-700 rounded-xl p-1 text-white text-center font-semibold shadow-md text-sm">
                Discount: {listing.regularPrice - listing.discountedPrice}
              </p>
            )}
          </div>

          {/* bedrooms  */}
          <ul className="flex items-center space-x-1 sm:space-x-8 sm:text-sm text-xs font-medium">
            <li className="flex items-center whitespace-nowrap">
              <FaBed className="sm:text-xl text-sm mr-1" />
              {+listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}
            </li>

            {/* bathrooms  */}
            <li className="flex items-center whitespace-nowrap">
              <FaBath className="sm:text-xl text-sm mr-1" />
              {+listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}
            </li>

            {/* parking  */}
            <li className="flex items-center whitespace-nowrap">
              <FaParking className="sm:text-xl text-sm mr-1" />
              {listing.parking ? "Parking spot" : "No parking"}
            </li>

            {/* furnished */}
            <li className="flex items-center whitespace-nowrap">
              <FaChair className="sm:text-xl text-sm mr-1" />
              {listing.furnished ? "Furnished" : "Not furnished"}
            </li>
          </ul>

          {/* property description  */}
          <p className="mt-3 mb-3">
            <span className="font-semibold">Description - </span>
            {listing.description}
          </p>

          {/* Contact the person who listed the property  */}
          {listing.userRef !== auth.currentUser?.uid && !contactLandlord && (
            <div className="mt-4">
              <button
                onClick={() => setContactLandlord(true)}
                className="px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg w-full text-center transition duration-150 ease-in-out "
              >
                Contact Landlord
              </button>
            </div>
          )}
          {contactLandlord && <Contact userRef={listing.userRef} listing={listing} />}
        </div>

        {/* property location on map  */}
        <div className="w-full h-[200px] md:h-[400px] z-10 overflow-x-hidden mt-6 md:mt-0 md:ml-2">
          <MapContainer center={[listing.geolocation.lat, listing.geolocation.lng]} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[listing.geolocation.lat, listing.geolocation.lng]}>
              <Popup>{listing.address}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </main>
  );
}
