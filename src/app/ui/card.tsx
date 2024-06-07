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
                <b className='mb-2'>{country.name}</b>
                <div>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            </div>                     
        </div>
    )
}
