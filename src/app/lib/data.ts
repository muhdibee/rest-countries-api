import axios from "axios";
import {Country} from '@/app/lib/definitions';
import countriesList from "@/app/lib/countries-data.json";



export  function fetchCountries(): any {
    return countriesList

}

export function fetchCountry(countryName: string): any | null | undefined {
    const country = countriesList.filter((oneCountry) => oneCountry.name.toLocaleLowerCase() === countryName.toLocaleLowerCase());
    if(country.length < 1){
        return 'not found'
    }
    return country[0];
}

