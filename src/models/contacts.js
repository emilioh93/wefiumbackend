import mongoose, { Schema } from "mongoose";

const contactsSchema = new Schema({
  imgContact: {
    type: String,
    unique: true,
  },
  nameContact: {
    type: String,
    required: true,
  },
  ageContact: {
    type: Number,
    required: true,
  },
  emailContact: {
    type: String,
    unique: true,
    required: true,
  },
  countryContact: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("contacts", contactsSchema);

export default Contact;
