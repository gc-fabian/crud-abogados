// pages/index.js
import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>👩‍⚖️ Sistema de Abogados</h1>
      <p>Esta pequeña aplicación te permite gestionar tu base de datos de abogados de forma sencilla:</p>
      <div className="ctas">
        <Link href="/abogados">
          <button className="viewList">📋 Ver lista</button>
        </Link>
        <Link href="/abogados/nuevo">
          <button className="newItem">➕ Nuevo abogado</button>
        </Link>
      </div>
    </div>
  )
}
