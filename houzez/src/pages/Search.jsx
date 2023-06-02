import React from "react";
import { useLocation } from "react-router";
import image from "../components/featured/rent.jpeg";
import { FaShare, FaMapMarkerAlt, FaBed, FaBath, FaParking, FaChair } from "react-icons/fa";

export default function Search() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  return <></>;
}
