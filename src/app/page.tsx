import Image from "next/image";
import {fetchCountries} from '@/app/lib/data'

export default async function Home() {

  const countries = await fetchCountries();
  return (
    <main className="">
      Index page<br />
      countries<br />
      {
        countries.map((country)=>(
          <p>{country.name.common}</p>
        ))
      }

    </main>
  );
}
