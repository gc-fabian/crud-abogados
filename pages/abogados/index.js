// pages/index.js
import Link from 'next/link'
import styles from '../styles/Abogados.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>📋 Gestión de Abogados</h1>
      <p className={styles.intro}>
        Bienvenido a tu panel de administración. Aquí podrás:
      </p>
      <ul className={styles.benefits}>
        <li>Ver todos tus abogados</li>
        <li>Agregar nuevos perfiles</li>
        <li>Editar o eliminar registros fácilmente</li>
      </ul>
      <div className={styles.actions}>
        <Link href="/abogados">
          <button>📑 Ver lista</button>
        </Link>
        <Link href="/abogados/nuevo">
          <button>➕ Nuevo abogado</button>
        </Link>
      </div>
    </div>
  )
}
