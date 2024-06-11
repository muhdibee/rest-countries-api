import { fetchCountries } from "@/app/lib/data";
import countriesList from "@/app/lib/countries-data.json";
import Card from "./ui/card";
import styles from "@/app/home.module.css";
import Search from "./ui/search";
import Filter from "./ui/filter";

export default async function Home() {
  const countries = countriesList;

  return (
    <main>
      <div className={`${styles.searchFilterContainer}`}>
        <Search />
        <Filter />
      </div>
      <section className={styles.cardsContainer}>
        {countries.map((country) => {
          return <Card key={country.name} country={country} />;
        })}
      </section>
    </main>
  );
}
