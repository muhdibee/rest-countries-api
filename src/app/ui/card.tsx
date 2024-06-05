import Image from 'next/image';
import styles from '@/app/ui/card.module.css'

export default function Card({country}) {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image
                  src={country.flags.png}
                  alt='dark_mode'
                  width={264}
                  height={160}
                />
            </div>
            <div className='flex flex-col space-y-2'>
                <span><b>{country.name}</b></span>
                <div>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            </div>                     
        </div>
    )
}
