import { PrismaClient } from "@prisma/client/extension";
import { PrismaPg } from "@prisma/adapter-pg";
import Environment from "@/config/env.config";

const adapter = new PrismaPg({
  connectionString: Environment.get("DATABASE_URL"),
});

export default new PrismaClient().$extends(adapter);
