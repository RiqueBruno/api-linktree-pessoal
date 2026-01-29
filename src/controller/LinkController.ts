import type { Request, Response } from "express";
import LinkService from "../services/LinkService.js";

export default class LinkController {
    private linkService: LinkService;

    constructor() {
        this.linkService = new LinkService();
    };

    // POST /links
    async createLink(req: Request, res: Response) {
        const {title, url} = req.body;
        const result = await this.linkService.create(title, url);
        return res.status(result.status).json(result.data);
    };

    // GET /links
    async getAllLinks(req: Request, res: Response) {
        const result = await this.linkService.getAll();
        return res.status(result.status).json(result.data);
    };

    // GET /links/:id
    async getLinkById(req: Request, res: Response) {
        const { id } = req.params;
        const result = await this.linkService.getById(Number(id));
        return res.status(result.status).json(result.data);
    };

    // PUT /links/:id
    async updateLinkById(req: Request, res: Response) {
        const { id } = req.params;
        const { title, url } = req.body;
        if (!title && !url) {
            return res.status(400).json({ message: "At least one of 'title' or 'url' must be provided for update." });
        }
        const result = await this.linkService.updateById(Number(id), title, url);
        return res.status(result.status).json(result.data);
    }

    // DELETE /links/:id
    async deleteLinkById(req: Request, res: Response) {
        const { id } = req.params;
        const result = await this.linkService.deleteById(Number(id));
        return res.status(result.status).json(result.data);
    }
};