import styles from "./filter.module.css";

export default function Filter() {
  return (
    <span>
      <select className={`${styles.select} px-4 py-2 rounded`}>
        <option>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        {/* <option value="antarctic">Antarctic</option>
        <option value="polar">Polar</option> */}
      </select>
    </span>
  );
}
