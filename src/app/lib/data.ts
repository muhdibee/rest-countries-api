import axios from "axios";
// import {} from '@/app/lib/definitions';
import countriesList from "@/app/lib/countries-data.json";



export  function fetchCountries(): any {
    return countriesList

}

export function fetchCountry(alpha3Code: string): any | null | undefined | string {
    const country = countriesList.filter((oneCountry) => oneCountry.alpha3Code.toLocaleLowerCase() === alpha3Code.toLocaleLowerCase());
    if(country.length < 1){
        return "Country not found";
    }
    return country[0];
}

