import useSWR from 'swr'
import Link from 'next/link'
import styles from '../../styles/Abogados.module.css'  // ¡dos niveles!

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ListaAbogados() {
  const { data, error } = useSWR('/api/abogados', fetcher)

  if (error) return <p style={{ textAlign: 'center' }}>Error al cargar.</p>
  if (!data) return <p style={{ textAlign: 'center' }}>Cargando...</p>

  return (
    <div className={styles.container}>
      <h1>Lista de Abogados</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a) => (
            <tr key={a._id}>
              <td>{a.nombre}</td>
              <td>{a.especialidad}</td>
              <td>{a.email}</td>
              <td>{a.telefono}</td>
              <td>
                <Link href={`/abogados/${a._id}/editar`}>
                  <a style={{ marginRight: '0.5rem' }}>Editar</a>
                </Link>
                <button
                  onClick={async () => {
                    if (!confirm('Eliminar este abogado?')) return
                    await fetch(`/api/abogados/${a._id}`, { method: 'DELETE' })
                    location.reload()
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
