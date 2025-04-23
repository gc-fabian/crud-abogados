// pages/index.js
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenido al CRUD de Abogados</h1>
      <p>
        <Link href="/abogados">
          <a>Ver lista de abogados →</a>
        </Link>
      </p>
    </div>
  )
}
