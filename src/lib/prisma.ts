import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient() {
  // No DATABASE_URL configured (e.g. local dev without a database, or a
  // preview deploy) — skip creating a real connection. Anything that
  // actually queries the DB will surface a clear error instead of the app
  // crashing at import time.
  if (!process.env.DATABASE_URL) {
    return new PrismaClient();
  }

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
