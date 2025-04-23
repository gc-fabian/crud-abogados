// pages/abogados/nuevo.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NuevoAbogado() {
  const [form, setForm] = useState({ nombre:'', especialidad:'', email:'', telefono:'' });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/abogados', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    router.push('/abogados');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Nuevo Abogado</h1>
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
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
