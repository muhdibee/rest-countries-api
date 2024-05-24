import Image from "next/image";
import {fetchCountries} from '@/app/lib/data'
import Header from "./ui/header";
import Card from "./ui/card";

export default async function Home() {

  const countries = await fetchCountries();
  const country10 = countries[1];
  console.log('Country 10', country10)

  return (
    <main className="">
      <Header />
      <Card country={country10}/>
    </main>
  );
}
