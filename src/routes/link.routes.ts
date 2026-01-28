import express from "express"
import LinkController from "../controller/LinkController.js";

const linkRoutes = express.Router();
const linkController = new LinkController();

// POST /links
linkRoutes.post("/",(req, res) => linkController.createLink(req, res));

export default linkRoutes;