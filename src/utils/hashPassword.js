import bcrypt from "bcrypt";

// Hasheo de contraseña
export const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// Validar la contraseña
export const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};