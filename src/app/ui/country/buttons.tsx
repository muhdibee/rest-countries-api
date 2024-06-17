"use client";
import { fetchCountry } from "@/app/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./buttons.module.css";
import { GoArrowLeft } from "react-icons/go";

export const BackButton = ({}) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className={`${styles.backButton} rounded px-4 py-1 mb-20 flex`}
      onClick={() => router.back()}>
      <span className="mt-1 mr-2">
        <GoArrowLeft />
      </span>
      <span>Back</span>
    </button>
  );
};

export const BorderCountries = ({ country }) => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap">
      {country.borders.map((alpha3Code: string) => {
        let fetchedCountry = fetchCountry(alpha3Code);
        return (
          <div key={alpha3Code} className={`${styles.borderCountry} rounded`}>
            <Link href={`/${alpha3Code}/${fetchedCountry.name}`}>
              <span>{fetchedCountry.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
