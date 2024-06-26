// models/ContactForm.js (example path)
import mongoose from 'mongoose';

const ContactFormSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const ContactForm = mongoose.model('ContactForm', ContactFormSchema);

export default ContactForm;
