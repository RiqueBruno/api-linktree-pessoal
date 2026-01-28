import express from "express"
import LinkController from "../controller/LinkController.js";

const linkRoutes = express.Router();
const linkController = new LinkController();

// POST /links
linkRoutes.post("/",(req, res) => linkController.createLink(req, res));

// GET /links
linkRoutes.get("/", (req, res) => linkController.getAllLinks(req, res));

// GET /links/:id
linkRoutes.get("/:id", (req, res) => linkController.getLinkById(req, res));

export default linkRoutes;