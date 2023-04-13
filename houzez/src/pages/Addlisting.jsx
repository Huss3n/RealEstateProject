import { useState } from "react";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";

export default function Addlisting() {
  // get auth
  const auth = getAuth();
  // geolocation hook
  const [geolacationEnabled, setGeolocationEnabled] = useState(true);

  // loading hook
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "rent",
    propertyName: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 1,
    discountedPrice: 1,
    latitude: 0,
    longitude: 0,
    images: {},
  });

  // destructuring the form data
  const { type, propertyName, bedrooms, bathrooms, parking, furnished, address, description, offer, regularPrice, discountedPrice, latitude, longitude, images } = formData;

  // on change tracking function
  function onChange(e) {
    let boolean = null; // used to change state in form data
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    // for files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }

    // for text / boolean / number
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value, // if boolean is null consider the second one
      }));
    }
  }

  // on submit function
  async function onSubmit(e) {
    // prevent reloading of the form
    e.preventDefault();
    setLoading(true);

    // check conditions before submittting
    // check the regular and discounted price
    if (discountedPrice >= regularPrice) {
      setLoading(false); // prevent loading
      toast.error("Regular price cannot be less than discounted price");
      return; // stop execution
    }
    // check images
    if (images.length < 1) {
      setLoading(false);
      toast.error("Minimun six images allowed");
      return;
    }

    // enabling the geo location
    let geolocation = {};
    let location;

    if (geolacationEnabled) {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&components=country:KE&key=${process.env.REACT_APP_GEOCODE_API_KEY}`);
      const data = await response.json();
      // console.log("data:", data);
      // console.log("results:", data.results);
      // console.log(data);

      if (data.status !== "OK" || data.results.length === 0 || data.results[0].partial_match === true) {
        setLoading(false);
        toast.error("Please enter a correct address");
        return;
      }

      geolocation.lat = data.results[0]?.geometry.location.lat ?? 0;
      geolocation.lng = data.results[0]?.geometry.location.lng ?? 0;

      // setting the location
      // location = data.status === "OK" && undefined;
      location = data.results[0]?.formatted_address ?? undefined;
      // console.log(typeof location);

      if (location === undefined || location.includes("undefined")) {
        setLoading(false);
        toast.error("Please enter a correct address");
        return;
      } else {
        geolocation.lat = latitude;
        geolocation.lng = longitude;
      }
    }
    async function storeImage(image) {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    }
    const imgUrls = await Promise.all([...images].map((image) => storeImage(image))).catch((error) => {
      setLoading(false);
      toast.error("Images not uploaded");
      return;
    });
    // create copy of form data
    const formDataCopy = {
      ...formData,
      imgUrls,
      geolocation,
      timestamp: serverTimestamp(),
    };
    delete formDataCopy.images;
    !formDataCopy.offer && delete formDataCopy.discountedPrice;
    const docRef = await addDoc(collection(db, "listings"), formDataCopy);
    setLoading(false);
    toast.success("New listing created");
  }

  // return the loading animation
  if (loading) {
    return <Loading />;
  }

  //  start of ui
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Add new listing</h1>
      <form onSubmit={onSubmit}>
        <p className="text-lg mt-6 font-semibold mb-2">Sell / Rent</p>
        <div className="flex mt-3">
          {/* sale button  */}
          <button
            type="button"
            id="type"
            value="sale"
            className={`mr-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              type === "rent" ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            Sell
          </button>

          {/* rent button  */}
          <button
            type="button"
            id="type"
            value="rent"
            className={`ml-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              type === "sale" ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            Rent
          </button>
        </div>

        {/* property name  */}
        <p className="tect-lg mt-6 font-semibold mb-2">Name</p>
        <input
          type="text"
          id="propertyName"
          value={propertyName}
          onChange={onChange}
          placeholder="Enter property name"
          maxLength={36}
          minLength={10}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 active:border-slate-600"
        />

        {/* bedrooms and bathrooms buttons  */}
        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold mb-2">Bedrooms</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min={1}
              required
              className="px-4 py-2 text-lg text-gray-700 bg-white border border-gray-700 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center rounded-xl w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Bathrooms</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min={1}
              required
              className="px-4 py-2 text-lg text-gray-700 bg-white border border-gray-700 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center rounded-xl w-full"
            />
          </div>
        </div>

        {/* parking spots button  */}
        <p className="text-lg mt-6 font-semibold mb-2">Parking spot</p>
        <div className="flex mt-3">
          {/* sale button  */}
          <button
            type="button"
            id="parking"
            value={true}
            className={`mr-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              !parking ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            Yes
          </button>

          {/* rent button  */}
          <button
            type="button"
            id="parking"
            value={false}
            className={`ml-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              parking ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            No
          </button>
        </div>

        {/* furnished section  */}
        <p className="text-lg mt-6 font-semibold mb-2">Furnished</p>
        <div className="flex mt-3">
          {/* sale button  */}
          <button
            type="button"
            id="furnished"
            value={true}
            className={`mr-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              !furnished ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            yes
          </button>

          {/* rent button  */}
          <button
            type="button"
            id="furnished"
            value={false}
            className={`ml-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              furnished ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            no
          </button>
        </div>

        {/* address section  */}
        <p className="text-lg font-semibold mt-2 mb-2">Address</p>
        <textarea
          type="text"
          value={address}
          id="address"
          required
          onChange={onChange}
          placeholder="Enter property address"
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-2 active:border-slate-600"
        />

        {/* co-ordinates section for manual input */}
        {!geolacationEnabled && (
          <div className="flex space-x-6 mb-6">
            <div className="">
              {/* manual latitude input   */}
              <p className="text-lg font-semibold">Latitude</p>
              <input
                type="number"
                id="latitude"
                value={latitude}
                onChange={onChange}
                required
                className="rounded-xl text-center w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600"
              />
            </div>

            {/* manual longitude input  */}
            <div className="">
              <p className="text-lg font-semibold">Longitude</p>
              <input
                type="number"
                id="longitude"
                value={longitude}
                onChange={onChange}
                required
                className="rounded-xl text-center w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600"
              />
            </div>
          </div>
        )}

        {/* description section  */}
        <p className="text-lg font-semibold mb-2">Description</p>
        <textarea
          type="text"
          value={description}
          id="description"
          required
          onChange={onChange}
          placeholder="Enter property description"
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-2 active:border-slate-600"
        />

        {/* offers section  */}
        <p className="text-lg font-semibold mb-2">Offer</p>
        <div className="flex">
          {/* sale button  */}
          <button
            type="button"
            id="offer"
            value={true}
            className={`mr-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              !offer ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            yes
          </button>

          {/* rent button  */}
          <button
            type="button"
            id="offer"
            value={false}
            className={`ml-3 px-7 py-2 font-medium text-sm uppercase shadow-lg rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-xl transition duration-150 ease-in-out w-full ${
              offer ? "text-black bg-white" : "bg-blue-500 text-white"
            }`}
            onClick={onChange}
          >
            no
          </button>
        </div>

        {/* regular price section  */}
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold mt-3">Regular price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min={50}
                required
                className="mt-2 rounded-xl text-center w-full px-4 -y-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"
              />
              {type === "rent" && (
                <div className="">
                  <p className="text-md-full whitespace-nowrap">Kshs / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* discounted price section  */}
        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold mt-3">Discounted price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min={50}
                  required={offer} // req if offer is true
                  className="mt-2 rounded-xl text-center w-full px-4 -y-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"
                />
                {type === "rent" && (
                  <div className="">
                    <p className="text-md-full whitespace-nowrap">Kshs / Month</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* images section  */}
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-500">The first image will be the cover image</p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            required
            accept=".jpg, .png, .jpeg, .heif, .heic"
            multiple
            className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-xl transition duration-150 ease-in-out focus:bg-white focus:border-slate-500"
          />
        </div>
        <button
          type="submit"
          className="mb-3 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl focus:shadow-xl active:bg-blue-800 active:shadow-2xl transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
