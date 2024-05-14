import darkMode from '../../../public/dark-mode.svg';
import Image from 'next/image'

export default function Header() {

    return (
        <div className='flex justify-between shadow px-6 py-6 bg-dark md:px-20 md:py-7'>
            <div>Where in the world?</div>
            <div>
                <Image
                  src={darkMode}
                  alt='dark_mode'
                  width={108}
                  height={22}
                />
            </div>                     
        </div>
    )
}
