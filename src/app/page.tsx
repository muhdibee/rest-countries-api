"use client";
import countriesList from "@/app/lib/countries-data.json";
import { fetchCountries } from "@/app/lib/data";
import { Country } from "./lib/definitions";
import { useSearchParams, usePathname } from "next/navigation";
import Card from "./ui/card";
import styles from "@/app/home.module.css";
import Search from "./ui/search";
import Filter from "./ui/filter";
import { useEffect, useState } from "react";

export default function Home() {
  const allCountries = fetchCountries();
  const [countries, setCountries] = useState(allCountries);

  // useEffect(() => {}, []);

  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const region = searchParams.get("region");

  if (countries.length < 1) {
    return (
      <main className={`${styles.main}`}>
        <p>countries not found</p>
      </main>
    );
  } else if (region !== null) {
    setTimeout(() => {
      const filterResult = allCountries.filter(
        (country) =>
          country.region.toLocaleLowerCase() === region.toLocaleLowerCase()
      );
      setCountries(filterResult);
    }, 500);
  }

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
