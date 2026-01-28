import type { Request, Response } from "express";
import LinkService from "../services/LinkService.js";

export default class LinkController {
    private linkService: LinkService;

    constructor() {
        this.linkService = new LinkService();
    }

    // POST /links
    async createLink(req: Request, res: Response) {
        const {title, url} = req.body;
        const result = await this.linkService.create(title, url);
        return res.status(result.status).json(result.data);
    }

    // GET /links
    async getAllLinks(req: Request, res: Response) {
        const result = await this.linkService.getAll();
        return res.status(result.status).json(result.data);
    }

}