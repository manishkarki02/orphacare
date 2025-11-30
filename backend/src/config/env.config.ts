import dotenv from "dotenv";
import path from "path";
import { z } from "zod/v4";
dotenv.config({
  path: [path.resolve(process.cwd(), ".env")],
});

// ---------------------------- DOT ENV Configurations Validation ---------------------------- //
const schema = z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.url().nonempty(),
  SWAGGER_HOST: z.url().default("localhost:3000"),
  CORS_ORIGIN: z
    .string()
    .trim()
    .nonempty()
    .transform((val) => val.split(","))
    .pipe(z.array(z.url())),

  ACCESS_TOKEN: z.string().trim().nonempty().min(10),
  ACCESS_TOKEN_EXPIRY: z.coerce
    .number()
    .positive()
    .default(0.5 * 60 * 60),

  REFRESH_TOKEN: z.string().trim().nonempty().min(10),
  REFRESH_TOKEN_EXPIRY: z.coerce
    .number()
    .positive()
    .default(7 * 24 * 60 * 60),

  NODE_MAILER_MAIL: z.string().trim().nonempty(),
  NODE_MAILER_SECRET: z.string().trim().nonempty(),
  NODE_MAILER_HOST: z.string().startsWith("smtp."),
  NODE_MAILER_PORT: z.coerce.number(),
});

// ---------------------------- DOT ENV Configurations ---------------------------- //
class Environment {
  private static instance: Environment;
  private env: z.infer<typeof schema>;

  private constructor() {
    const result = schema.safeParse(process.env);

    if (!result.success) {
      console.error("❌ Invalid environment variables:", result.error);
      process.exit(1);
    }

    this.env = result.data;
  }

  public static getInstance(): Environment {
    if (!Environment.instance) {
      Environment.instance = new Environment();
    }
    return Environment.instance;
  }

  public get<T extends keyof z.infer<typeof schema>>(
    key: T
  ): z.infer<typeof schema>[T] {
    return this.env[key];
  }
}

export default Environment.getInstance();
