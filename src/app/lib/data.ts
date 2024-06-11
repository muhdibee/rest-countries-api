import axios from "axios";
import {Countries} from '@/app/lib/definitions';
import countriesList from "@/app/lib/countries-data.json";



export  function fetchCountries(): any {
    return countriesList

}

export async function fetchCountry(country: String): Promise<any> {
    try{
        const response = await axios.get(`https://restcountries.com/v3/name/${country}?fullText=true`);
        return response.data;
    }catch(error){
        console.log('API Error: ', error);
        return "An error occurred";
    }
}
