import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div
      className={`${styles.footerContainer} flex justify-center align-items-center py-2 w-full`}>
      Coded by: &nbsp;
      <Link href={"https://www.linkedin.com/in/muhdibee/"}>
        <p className={styles.linkedIn}> Muhammad Ibrahim</p>
      </Link>
    </div>
  );
};

export default Footer;
