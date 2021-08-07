import { Router } from "express";
import contactsCtrl from "../controllers/contacts.controllers";

const router = Router();

router.route("/").get(contactsCtrl.getPrueba);

export default router;
