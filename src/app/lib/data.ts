import axios from "axios";
import {Countries} from '@/app/lib/definitions'

export async function fetchCountries(): Promise<any> {
    try{
        const response = await axios.get('https://restcountries.com/v3.1/all');
        return response.data;
    }catch(error){
        console.log('API Error: ', error);
    }
}
