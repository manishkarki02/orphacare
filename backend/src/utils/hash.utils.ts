const saltRounds = 10;
import bcrypt from "bcrypt";

export const generatePasswordHash = async (
  password: string
): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const comparePasswordHash = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
