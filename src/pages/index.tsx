import styles from "./index.less";
import MyCalendar from "./Calendar/pages/index";

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${styles.left}`}>
        <MyCalendar />
      </div>
      <div className={`${styles.content} ${styles.middle}`}>123</div>
      <div className={`${styles.content} ${styles.right}`}>123</div>
    </div>
  );
}
