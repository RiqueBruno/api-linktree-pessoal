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
  };

  async getAll() {
    const links = await prisma.link.findMany();
    return MapStatusHttp.okData(links);
  };

  async getById(id: number) {
    const link = await prisma.link.findUnique({
      where: { id },
    });
    if (!link) return MapStatusHttp.notFound("Link not found");
    
    return MapStatusHttp.okData(link);
  };

  async deleteById(id: number) {
    const link = await prisma.link.delete({where: {id}});
    return MapStatusHttp.okData(link);
  }
}
