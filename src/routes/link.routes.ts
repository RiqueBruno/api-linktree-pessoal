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

// PUT /links/:id
linkRoutes.put("/:id", (req, res) => linkController.updateLinkById(req, res));

// DELETE /links/:id
linkRoutes.delete("/:id", (req, res) => linkController.deleteLinkById(req, res));

export default linkRoutes;