"use client";
import { fetchCountry } from "@/app/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./buttons.module.css";

export const BackButton = ({}) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="border rounded px-6 py-1 mb-20"
      onClick={() => router.back()}>
      Back
    </button>
  );
};

export const BorderCountries = ({ country }) => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap">
      {country.borders.map((alpha3Code: string) => {
        console.log(alpha3Code);
        let fetchedCountry = fetchCountry(alpha3Code);
        console.log(fetchedCountry.name);
        return (
          <div className={`${styles.borderCountry} border rounded`}>
            <Link href={`/${alpha3Code}/${fetchedCountry.name}`}>
              <span>{fetchedCountry.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
