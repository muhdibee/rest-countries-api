"use client";
import countriesList from "@/app/lib/countries-data.json";
import { fetchCountries } from "@/app/lib/data";
import { Country } from "./lib/definitions";
import { useSearchParams, usePathname } from "next/navigation";
import Card from "./ui/card";
import styles from "@/app/home.module.css";
import Search from "./ui/search";
import Filter from "./ui/filter";

export default function Home() {
  const countries = fetchCountries();

  const pathname = usePathname();
  const SearchParams = useSearchParams();
  const params = new URLSearchParams(SearchParams);

  console.log(params);

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
