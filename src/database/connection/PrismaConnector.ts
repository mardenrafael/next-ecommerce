import { PrismaClient } from "@prisma/client";

export default class PrismaConnector {
  private readonly prismaClientInstance: PrismaClient;
  private static connectorInstance: PrismaConnector;

  private constructor() {
    this.prismaClientInstance = new PrismaClient();
    console.log("connector instance created");
  }

  public static getConnector(): PrismaConnector {
    if (PrismaConnector.connectorInstance == undefined) {
      this.connectorInstance = new PrismaConnector();
    }

    return this.connectorInstance;
  }

  public getPrismaclientInstance(): PrismaClient {
    return this.prismaClientInstance;
  }
}
