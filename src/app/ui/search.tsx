import Image from "next/image";
import search from "../../../public/search.svg";

export default function Search() {
  return (
    <div className="mx-3 my-3 flex shadow px-2 py-2 w-4/12">
      <Image src={search} height={18} width={18} alt="Search icon" />
      <input
        className=" ml-3"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
