import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import Environment from "@/config/env.config";

const adapter = new PrismaPg({
  connectionString: Environment.get("DATABASE_URL"),
});

export default new PrismaClient({ adapter });
