"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
    console.log(searchText.toLocaleLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/?country=${searchText.toLocaleLowerCase()}`);
    setTimeout(() => {
      setSearchText("");
    }, 5000);
  };

  return (
    <div
      className={`${styles.searchContainer} my-3 flex px-6 py-2 w-full md:w-6/12 lg:w-4/12 shadow rounded`}>
      <MdSearch className="text-lg mt-1" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className={`ml-3 w-full`}
          type="text"
          value={searchText}
          placeholder="Search for a country..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
