import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Abogados.module.css'

const ESPECIALIDADES = [
  'Civil','Penal','Laboral','Familia',
  'Comercial','Ambiental','Constitucional','Mercantil'
]

export default function NuevoAbogado() {
  const [form, setForm] = useState({
    nombre: '', especialidad: '', email: '', telefono: ''
  })
  const router = useRouter()

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('/api/abogados', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify(form)
    })
    router.push('/abogados')
  }

  return (
    <div className={styles.container}>
      <h1>Nueva ficha</h1>
      <form onSubmit={handleSubmit}>

        <div className={styles.field}>
          <label>Nombre</label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label>Especialidad</label>
          <input
            list="especialidades"
            name="especialidad"
            value={form.especialidad}
            onChange={handleChange}
            required
          />
          <datalist id="especialidades">
            {ESPECIALIDADES.map((esp) =>
              <option value={esp} key={esp} />
            )}
          </datalist>
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label>Teléfono</label>
          <input
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Crear abogado</button>
      </form>
    </div>
  )
}
