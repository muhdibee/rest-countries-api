"use client";
import Image from "next/image";
import styles from "./country.module.css";
import { BackButton, BorderCountries } from "../../ui/country/buttons";
import { fetchCountry } from "../../lib/data";
import { useEffect, useState } from "react";

export default function Country({ params }) {
  const { alpha3Code } = params;
  const country = fetchCountry(alpha3Code);
  const [countryData, setCountryData] = useState("loading");

  useEffect(() => {
    setCountryData(country);
  }, []);

  if (countryData === "loading") {
    return (
      <main className="px-7 md:px-20 py-6 md:py-12">
        <BackButton />
        <div>Loading</div>
      </main>
    );
  } else if (countryData === "not found") {
    return (
      <main className="px-7 md:px-20 py-6 md:py-12">
        <BackButton />
        <div>Country not found</div>
      </main>
    );
  }
  return (
    <main className="px-7 md:px-20 py-16 mb-8">
      <BackButton />
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.imageContainer} rounded-lg`}>
          <Image
            src={country.flags.svg}
            className="rounded-lg"
            alt={country.name}
            fill
          />
        </div>
        <div className={`${styles.textDetailsContainer}`}>
          <h1 className="font-bold text-3xl ">{country.name}</h1>
          <div className="flex flex-wrap justify-between  my-6 mb-6">
            <div className="mr-2">
              <p>
                <b>Native Name:</b> {country.nativeName}
              </p>
              <p>
                <b>Population: </b> {country.population}
              </p>
              <p>
                <b>Region: </b> {country.region}
              </p>
              <p>
                <b>Sub Region: </b> {country.subregion}
              </p>
              <p>
                <b>Capital: </b> {country.capital ? country.capital : "N/A"}
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <p>
                <b>Top Level Domain: </b>{" "}
                {country.topLevelDomain ? country.topLevelDomain : "N/A"}
              </p>
              <p>
                <b>Currency: </b>{" "}
                {country.currencies ? country.currencies[0].name : "N/A"}
              </p>
              <p>
                <b>Languages: </b>
                {country.languages.map((language: { name: string }) => (
                  <span>{language.name} </span>
                ))}
              </p>
            </div>
          </div>
          {country.borders && (
            <div className="">
              <b>Border Countries:</b>
              <div className="mt-2 max-w-full flex">
                <BorderCountries country={country} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
