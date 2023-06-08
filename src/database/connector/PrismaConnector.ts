import { PrismaClient } from "@prisma/client";

export default class PrismaConnector {
  private static instance: PrismaConnector;
  private readonly prisma: PrismaClient;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  public static getInstance(): PrismaConnector {
    if (PrismaConnector.instance == undefined) {
      this.instance = new PrismaConnector();
      console.log("New Prisma Connector");
    }

    return this.instance;
  }

  public getPrisma(): PrismaClient {
    return this.prisma;
  }
}
