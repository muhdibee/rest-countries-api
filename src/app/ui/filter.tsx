"use client";
import { useState } from "react";
import styles from "./filter.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Filter() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (filter: string): void => {
    // console.log(filter);
    // console.log(pathname);
    router.push(`${pathname}?region=${filter}`);
  };

  return (
    <span>
      <select
        className={`${styles.filter} px-4 py-2 rounded`}
        onChange={(e) => handleChange(e.target.value)}>
        <option className="selected" selected disabled>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        {/* <option value="antarctic">Antarctic</option>
        <option value="polar">Polar</option> */}
      </select>
    </span>
  );
}
