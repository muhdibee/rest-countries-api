import { fetchCountries } from "@/app/lib/data";
import { Country } from "./lib/definitions";
import countriesList from "@/app/lib/countries-data.json";
import Card from "./ui/card";
import styles from "@/app/home.module.css";
import Search from "./ui/search";
import Filter from "./ui/filter";

export default async function Home() {
  const countries = fetchCountries();

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
