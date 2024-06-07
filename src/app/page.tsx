import Image from "next/image";
import {fetchCountries} from '@/app/lib/data';
import countriesList from '@/app/lib/countries-data.json'
import Header from "./ui/header";
import Card from "./ui/card";
import styles from "@/app/home.module.css"
import Search from "./ui/search";

export default async function Home() {

  const countries = countriesList;
  const country10 = countries[1];
  // console.log('Country 10', country10)

  return (
    <main>
      <Header />
      <Search />
      <main className={styles.cardsContainer} >
        <Card country={countries[1]}/>
        <Card country={countries[2]}/>
        <Card country={countries[3]}/>
        <Card country={countries[4]}/>
        <Card country={countries[5]}/>
        <Card country={countries[6]}/>
        <Card country={countries[7]}/>
        <Card country={countries[8]}/>
        <Card country={countries[9]}/>
        <Card country={countries[10]}/>
      </main>
    </main>
  );
}
