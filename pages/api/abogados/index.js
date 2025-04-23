// pages/api/abogados/index.js
import dbConnect from '../../../lib/dbConnect';
import Abogado from '../../../models/Abogado';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const abogados = await Abogado.find();
    return res.status(200).json(abogados);
  }

  if (req.method === 'POST') {
    try {
      const newAbogado = await Abogado.create(req.body);
      return res.status(201).json(newAbogado);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
