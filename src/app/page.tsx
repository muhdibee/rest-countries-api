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
import { BackButton } from "./ui/country/buttons";

export default function Home() {
  const allCountries = fetchCountries();
  const [countries, setCountries] = useState(allCountries);

  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  const country = searchParams.get("country");

  useEffect(() => {
    checkIfNoSearchAndFilter();
    checkNoCountries();
    checkSearchAvailable();
    checkFilterAvailable();
  }, [countries, country, region]);

  const checkIfNoSearchAndFilter = () => {
    if (region === null && country === null) {
      setTimeout(() => {
        setCountries(allCountries);
      }, 500);
    }
  };

  const checkNoCountries = () => {
    if (countries.length < 1) {
      return (
        <main className={`${styles.main}`}>
          <p>country not found</p>
        </main>
      );
    }
  };

  const checkSearchAvailable = () => {
    if (country !== null) {
      setTimeout(() => {
        const filterResult = allCountries.filter(
          (countryObj) =>
            countryObj.name.toLocaleLowerCase() === country.toLocaleLowerCase()
        );
        setCountries(filterResult);
      }, 500);
    }
  };

  const checkFilterAvailable = () => {
    if (region !== null) {
      setTimeout(() => {
        const filterResult = allCountries.filter(
          (country) =>
            country.region.toLocaleLowerCase() === region.toLocaleLowerCase()
        );
        setCountries(filterResult);
      }, 500);
    }
  };

  if (countries.length < 1) {
    return (
      <main className={`${styles.main}`}>
        <BackButton />
        <b className="flex justify-center text-lg">country not found</b>
      </main>
    );
  } else {
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
}
