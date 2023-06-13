import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import PropertyCard from "../../components/Card/propertyCard";
import { Link } from "react-router-dom";
import "../index.css";

export default function FeaturedProperty() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto lg:p-20 pb-2 pt-2 px-2">
        <div className="lg:p-20 lg:rounded-3xl bg-white shadow-xl py-16" id="featured">
          <h2 className="mb-3 font-semibold lg:text-[48px] text-3xl text-center lg:text-left">Featured Property</h2>
          <p className="text-center lg:text-left text-gray-400 sm:mb-12 mb-10">Let's find you a comfortable place</p>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start lg:mr-12">
              <div className="image-container">
                <img src={require("../components/featured/rent.jpeg")} alt="rent" className="image rounded-xl" />
              </div>
              <div className="image-content">
                <h3 className="text-center lg:text-left text-3xl font-semibold mb-2">Rent</h3>
                <p className="text-center lg:text-left text-gray-400">
                  We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.
                </p>
                <a href="/AllListings#rentalProperties" className="btn btn-rent bg-blue-600">
                  See Rentals
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start lg:mr-12">
              <div className="image-container">
                <img src={require("../components/featured/buy.jpeg")} alt="buy" className="image rounded-xl" />
              </div>
              <div className="image-content">
                <h3 className="text-center lg:text-left text-3xl font-semibold mb-2">Buy</h3>
                <p className="text-center lg:text-left text-gray-400">
                  Find your place with an immersive photo expirience and the most listings, including things you won't find elsewhere
                </p>
                <a href="/AllListings" className="btn btn-buy bg-blue-600">
                  See Options
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <div className="image-container">
                <img src={require("../components/featured/sell.jpeg")} alt="sell" className="image rounded-xl" />
              </div>
              <div className="image-content">
                <h3 className="text-center lg:text-left text-3xl font-semibold mb-2">Sell</h3>
                <p className="text-center lg:text-left text-gray-400">
                  No matter what path you take to sell your home, we can help you navigate a successful sale and with the best practice and safety in mind
                </p>
                <a href="#" className="btn btn-sell bg-blue-600">
                  Sell a Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
