import { User } from "../domain/model/user";
import userDb from "../domain/data-access/user.db";
import { UserInput } from "../types";

 
const createUser = ({ name, password}: UserInput): User => {
    const user = new User({name, password, comments : [], blogs: []})

    return userDb.createUser(user)
}


export default {
    createUser
}





