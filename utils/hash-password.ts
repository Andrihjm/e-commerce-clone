import bcrypt from "bcrypt";

export const hashedPassword = async (password: string) => {
  const saltRounds = 10;
  const saltPassword = await bcrypt.hash(password, saltRounds);
  return saltPassword;
};

export const verifyPassword = async (salt: string, password: string) => {
  const verifyPassword = await bcrypt.compare(password, salt);
  return verifyPassword;
};
