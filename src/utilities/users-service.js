import * as usersAPI from "./users-api";

export async function signUp(userData){
    console.log(userData)
    const token = await usersAPI.signUp(userData)
    return token;
}