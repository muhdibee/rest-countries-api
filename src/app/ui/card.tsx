import Image from 'next/image';
import styles from '@/app/ui/card.module.css'

export default function Card({country}) {

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                 className={styles.CardImage}
                  src={country.flags.svg}
                  alt={`${country.name} flag`}
                 sizes="100%"
                 fill
                />
            </div>
            <div className={styles.textContainer}>
                <b className=''>{country.name}</b>
                <div className='mt-2'>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            </div>                     
        </div>
    )
}
