import Image from "next/image";
import {fetchCountries} from '@/app/lib/data'
import Header from "./ui/header";

export default async function Home() {

  const countries = await fetchCountries();
  return (
    <main className="">
      <Header />
    </main>
  );
}
