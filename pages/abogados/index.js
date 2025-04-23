// pages/abogados/index.js
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ListaAbogados() {
  const { data, error } = useSWR('/api/abogados', fetcher);

  if (error) return <p>Error al cargar.</p>;
  if (!data) return <p>Cargando...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Lista de Abogados</h1>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Nombre</th><th>Especialidad</th><th>Email</th><th>Teléfono</th><th>Acciones</th>
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
                <Link href={`/abogados/${a._id}/editar`}>Editar</Link>{' | '}
                <button onClick={async () => {
                  if (!confirm('Eliminar este abogado?')) return;
                  await fetch(`/api/abogados/${a._id}`, { method: 'DELETE' });
                  location.reload();
                }}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
