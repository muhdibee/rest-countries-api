import moon from "../../../public/moon.svg";
import Image from "next/image";
import styles from "@/app/ui/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div
      className={`${styles.header} flex justify-between shadow px-6 py-6 md:px-20 md:py-7`}>
      <div>
        <Link href={"/"}>Where in the world?</Link>
      </div>
      <div className="flex space-x-2">
        <span style={{ height: "1.25rem", width: "1.25rem" }}>
          <Image src={moon} alt="dark_mode" className="mr-1" />
        </span>
        <span>Dark Mode</span>
      </div>
    </div>
  );
}
