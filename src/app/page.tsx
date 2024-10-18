import styles from "@/styles/app.module.css"
import { Cards } from "@/app/components/ui/cards"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}> </div>

      <div className={styles.center}>
        <h3 className="ms-2 me-3 text-dark"> + </h3>
      </div>

      <div className={styles.grid}>
        <Cards />
      </div>
    </main>
  )
}
