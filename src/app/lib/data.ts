import axios from "axios";
import {Country} from '@/app/lib/definitions';
import countriesList from "@/app/lib/countries-data.json";



export  function fetchCountries(): any {
    return countriesList

}

export function fetchCountry(alpha3Code: string): any | null | undefined | string {
    const country = countriesList.filter((oneCountry) => oneCountry.alpha3Code === alpha3Code);
    if(country.length < 1){
        return 'not found'
    }
    return country[0];
}

