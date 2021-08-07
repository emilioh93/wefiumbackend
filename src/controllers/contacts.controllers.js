import Contact from "../models/contacts";

const contactsCtrl = {};

contactsCtrl.getPrueba = (req, res) => {
  res.send("Hola desde el servidor");
};
contactsCtrl.newContact = async (req, res) => {
  try {
    const addNewContact = new Contact({
      imgContact: req.body.imgContact,
      nameContact: req.body.nameContact,
      ageContact: req.body.ageContact,
      emailContact: req.body.emailContact,
      countryContact: req.body.countryContact,
    });
    await addNewContact.save();
    res.status(201).json({
      message: "Contacto agregado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al agregar contacto",
    });
  }
};

contactsCtrl.listContacts = async (req, res) => {
  try {
    const arrayContacts = await Contact.find();
    res.status(200).json(arrayContacts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al listar contacto",
    });
  }
};

export default contactsCtrl;
