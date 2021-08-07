import Contact from "../models/contacts";

const contactsCtrl = {};

contactsCtrl.getPrueba = (req, res) => {
  res.send("Hola desde el servidor");
};

export default contactsCtrl;
