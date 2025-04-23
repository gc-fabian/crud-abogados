// pages/abogados/[id]/editar.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function EditarAbogado() {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/abogados/${id}`)
      .then(res => res.json())
      .then(a => setForm(a));
  }, [id]);

  if (!form) return <p>Cargando...</p>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/abogados/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    router.push('/abogados');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Editar Abogado</h1>
      <form onSubmit={handleSubmit}>
        {['nombre','especialidad','email','telefono'].map((field) => (
          <div key={field} style={{ margin: '0.5rem 0' }}>
            <label style={{ display: 'block' }}>{field.charAt(0).toUpperCase()+field.slice(1)}:</label>
            <input
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
        ))}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
