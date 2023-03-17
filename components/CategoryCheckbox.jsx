import styles from "../styles/CategoryCheckbox.module.css"


const CategoryCheckbox = () => {
  return (
    <div className={styles.round}>
      <input type="checkbox" id="checkbox" />
      <label for="checkbox"></label>
    </div>
  );
};

export default CategoryCheckbox;
