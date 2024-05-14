import moon from '../../../public/moon.svg';
import Image from 'next/image'

export default function Header() {

    return (
        <div className='flex justify-between shadow px-6 py-6 bg-dark md:px-20 md:py-7'>
            <div>Where in the world?</div>
            <div className='flex space-x-2'>
                <Image
                  src={moon}
                  alt='dark_mode'
                  width={20}
                  height={20}
                  className='mr-1'
                />
                Dark Mode
            </div>                     
        </div>
    )
}
