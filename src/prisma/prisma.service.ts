import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';


@Injectable()
export class PrismaService extends PrismaClient  {
  constructor() {
    super({
      datasources: {
        db: {
          url: "postgresql://postgres:123@localhost:5434/nest?schema=public",
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}