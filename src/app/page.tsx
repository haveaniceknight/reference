// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className=""> Reference.
//     </main>
//   );
// }
import Image from "next/image";
import styles from './Home.module.css'; // Make sure to create this CSS module file

export default function Home() {
  return (
    <main className={styles.centeredContent}>
      <div>
        <h1>Reference</h1>
        <p>Andrew Hull Charlie Dixon</p>
      </div>
    </main>
  );
}