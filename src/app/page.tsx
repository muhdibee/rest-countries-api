"use client";
import countriesList from "@/app/lib/countries-data.json";
import { fetchCountries } from "@/app/lib/data";
import { Country } from "./lib/definitions";
import { useSearchParams, usePathname } from "next/navigation";
import Card from "./ui/card";
import styles from "@/app/home.module.css";
import Search from "./ui/search";
import Filter from "./ui/filter";
import { useState } from "react";

export default function Home() {
  const allCountries = fetchCountries();
  const [countries, setCountries] = useState(allCountries);

  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  console.log(region);

  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.searchFilterContainer}`}>
        <Search />
        <Filter />
      </div>
      <section className={styles.cardsContainer}>
        {countries.map((country: Country) => {
          return <Card key={country.name} country={country} />;
        })}
      </section>
    </main>
  );
}
