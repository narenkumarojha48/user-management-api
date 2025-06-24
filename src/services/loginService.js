import HTTPError from "node-http-error";
export const validateLogin = (username, password) => { 
    if(  username===""||username===null||username===undefined){
        throw new HTTPError(400,"Username is required")
    } 
    if(username.length < 4 || username.length > 8){
        throw new HTTPError(400,"Username length should be greater than 4 and less than 8.")
    }
    if(!password?.trim()){
        throw new HTTPError(400,"password is required")
    }else if(password.length < 2 || password.length > 8){
        throw new HTTPError(400,"password length should be greater than 2 and less than 8.")
    }else{
        return true;
    }
   
    
}