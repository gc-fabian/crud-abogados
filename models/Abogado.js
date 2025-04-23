// models/Abogado.js
import mongoose from 'mongoose';

const AbogadoSchema = new mongoose.Schema({
  nombre:       { type: String, required: true },
  especialidad: { type: String, required: true },
  email:        { type: String, required: true },
  telefono:     { type: String, required: true },
});

export default mongoose.models.Abogado ||
       mongoose.model('Abogado', AbogadoSchema);
