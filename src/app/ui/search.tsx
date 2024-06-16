"use client";
import Image from "next/image";
import search from "../../../public/search.svg";
import { GoSearch } from "react-icons/go";
import styles from "./search.module.css";

export default function Search() {
  return (
    <div
      className={`${styles.searchContainer} my-3 flex px-6 py-2 w-full md:6/12 lg:w-4/12 shadow rounded`}>
      <GoSearch className="text-lg mt-1" />
      <input
        className={`ml-3 w-full`}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
