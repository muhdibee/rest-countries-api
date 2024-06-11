import Image from "next/image";
import { BackButton } from "../ui/country/buttons";
import { fetchCountry } from "../lib/data";

export default function Country({ params }) {
  const { country: countryParam } = params;
  const countryData = fetchCountry(countryParam);

  const country = countryData[0];

  //   console.log("The country ---: ", country);

  return (
    <main className="px-7 md:px-20 py-6 md:py-12">
      <BackButton />
      <div>{country.name.common}</div>
      <div>{/* <Image src={} */}</div>
    </main>
  );
}
