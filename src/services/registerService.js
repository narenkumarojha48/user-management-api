import createHttpError from "node-http-error";
import {EmployeeModel} from "../model/Employee.js";
export const validateRegister = async (username, password) => {
  if (!username?.trim()) {
    throw createHttpError(400, "Username is required");
  }
  if (username.length < 3 || username.length > 8) {
    throw createHttpError(
      400,
      "Username length should be min 3 char and max 8 chars long"
    );
  }
  if (!/^\w+$/.test(username)) {
    throw createHttpError(400, "Username should be alphanumeric");
  }
  if (!password?.trim()) {
    throw createHttpError(400, "Password is required");
  } else if (password.length < 3) {
    throw createHttpError(400, "Password should be minimum 3 chars long");
  } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    throw createHttpError(
      400,
      "Password should contain 1 capital letter and 1 digit"
    );
  }
  
  
  return true;
};
