import Image from "next/image";
import search from "../../../public/search.svg"

export default function Search() {

    return (
        <div className='mx-3 my-3 flex'>
            <Image
            src={search} height={18}  width={18} alt='Search icon' />
            <input  className= ' ml-2' type="text" placeholder="Search for a country" />
        </div>
    )
}
