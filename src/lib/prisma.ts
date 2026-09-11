import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function buildConnectionString(raw: string) {
  const url = new URL(raw);
  url.searchParams.delete("sslmode"); 
  return url.toString();
}

function createPrismaClient() {
  const pool = new Pool({
    connectionString: buildConnectionString(process.env.DATABASE_URL!),
    ssl: { rejectUnauthorized: false },
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;