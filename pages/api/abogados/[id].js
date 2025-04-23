// pages/api/abogados/[id].js
import dbConnect from '../../../lib/dbConnect';
import Abogado from '../../../models/Abogado';

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  if (req.method === 'GET') {
    const abogado = await Abogado.findById(id);
    return abogado
      ? res.status(200).json(abogado)
      : res.status(404).json({ error: 'No encontrado' });
  }

  if (req.method === 'PUT') {
    try {
      const abogado = await Abogado.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json(abogado);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  if (req.method === 'DELETE') {
    await Abogado.findByIdAndDelete(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
