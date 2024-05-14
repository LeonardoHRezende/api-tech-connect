import { PrismaService } from "../prisma.service";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaService | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaService();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
