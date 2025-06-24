import createHttpError from "node-http-error";
export const validateUser = (user) => {
  const { name, username, email, password, checkme } = user;
  const errors = {};
   if (!name?.trim()) {
    errors.name = "name is required"
    // throw createHttpError(400, "name is required");
  }
  if (!username?.trim()) {
    errors.username = "Username is required"
    // throw createHttpError(400, "Username is required");
  }
  if (username.length < 3 || username.length > 8) {
    errors.username = "Username length should be min 3 char and max 8 chars long"
    // throw createHttpError(
    //   400,
    //   "Username length should be min 3 char and max 8 chars long"
    // );
  }
  if (!/^\w+$/.test(username)) {
    errors.username = "Username should be alphanumeric"
    // throw createHttpError(400, "Username should be alphanumeric");
  }
  if (!email?.trim()) {
    errors.email = "Email is required"
    // throw createHttpError(400, "Email is required");
  }
  if (!password?.trim()) {
    errors.password =  "Password is required";
    // throw createHttpError(400, "Password is required");
  } else if (password.length < 3) {
    errors.password =  "Password should be minimum 3 chars long";
    // throw createHttpError(400, "Password should be minimum 3 chars long");
  } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    errors.password =  "Password should contain 1 capital letter and 1 digit";
    // throw createHttpError(
    //   400,
    //   "Password should contain 1 capital letter and 1 digit"
    // );
  }
  if (checkme===undefined || checkme===null ||checkme==="" ||checkme===" ") {
      errors.checkme = "CheckMe is required";
    // throw createHttpError(400, "CheckMe is required");
  }
  if (Object.keys(errors).length === 0) {
    return true;
  }else{
     throw createHttpError(400,errors)
  }
   
//   return errors;

//   if (!name?.trim()) {
//     throw createHttpError(400, "name is required");
//   }
//   if (!username?.trim()) {
//     throw createHttpError(400, "Username is required");
//   }
//   if (username.length < 3 || username.length > 8) {
//     throw createHttpError(
//       400,
//       "Username length should be min 3 char and max 8 chars long"
//     );
//   }
//   if (!/^\w+$/.test(username)) {
//     throw createHttpError(400, "Username should be alphanumeric");
//   }
//   if (!email?.trim()) {
//     throw createHttpError(400, "Email is required");
//   }
//   if (!password?.trim()) {
//     throw createHttpError(400, "Password is required");
//   } else if (password.length < 3) {
//     throw createHttpError(400, "Password should be minimum 3 chars long");
//   } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
//     throw createHttpError(
//       400,
//       "Password should contain 1 capital letter and 1 digit"
//     );
//   }
//   if (checkme===undefined || checkme===null ||checkme==="" ||checkme===" ") {
//     throw createHttpError(400, "CheckMe is required");
//   }
//   return true;
  console.log(name, username, email, password, checkme);
};
