import prisma from "../lib/prisma.js";
import MapStatusHttp from "../utils/MapStatusHttp.js";

export default class LinkService {
  async create(title: string, url: string) {
    const newLink = await prisma.link.create({
      data: {
        title,
        url,
      },
    });
    return MapStatusHttp.createdData(newLink);
  }
}
