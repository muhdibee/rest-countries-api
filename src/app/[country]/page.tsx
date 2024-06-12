"use client";
import Image from "next/image";
import style from "./country.module.css";
import { BackButton } from "../ui/country/buttons";
import { fetchCountry } from "../lib/data";
import { useEffect, useState } from "react";

export default function Country({ params }) {
  const { country: countryParam } = params;
  const country = fetchCountry(countryParam);
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
    <main className="px-7 md:px-20 py-6 md:py-12 mb-6">
      <BackButton />
      <div className="flex flex-wrap space-x-12">
        <div className={`${style.imageContainer} rounded-lg`}>
          <Image
            src={country.flags.svg}
            className="rounded-lg"
            alt={country.name}
            sizes="100%"
            fill
          />
        </div>
        <div className="my-6  w-5/12">
          <h1 className="font-bold text-3xl ">{country.name}</h1>
          <div
            className="flex justify-between  flex-wrap w-1/2 my-6 mb-6"
            style={{
              width: "100%",
            }}>
            <div>
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
                <b>Capital: </b> {country.capital}
              </p>
            </div>
            <div className=" ">
              <p>
                <b>Top Level Domain: </b> {country.topLevelDomain}
              </p>
              <p>
                <b>Currency: </b> {country.currencies[0].name}
              </p>
              <p>
                <b>Languages: </b>
                {country.languages.map((language: { name: string }) => (
                  <span>{language.name} </span>
                ))}
              </p>
            </div>
          </div>
          <div className="flex flex-nowrap">
            Border Countries:
            <div className="ml-2">
              <BackButton />
              <BackButton />
              <BackButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
