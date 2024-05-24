import Image from 'next/image';
import styles from '@/app/ui/card.module.css'

export default function Card({country}) {

    return (
        <div className='card flex flex-col'>
            <div className='card-image'>
                <Image
                  src={country.flags.svg}
                  alt='dark_mode'
                  width={264}
                  height={160}
                />
            </div>
            <div className='flex flex-col space-y-2'>
                <span><b>{country.name.common}</b></span>
                <div>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital[0]}</p>
                </div>
            </div>                     
        </div>
    )
}
