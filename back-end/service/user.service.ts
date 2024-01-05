import { User } from "../domain/model/user";
import userDb from "../domain/data-access/user.db";
import { UserInput } from "../types";
import emailDb from "../domain/data-access/email.db";

 
// const createUser = ({ id, username, password, email: emailInput}: UserInput): User => {

//     const email = emailDb.getEmailById({id: emailInput.id})

//     const existing = userDb.checkUserAlreadyExists(username, password, email);

//     //validation
//     if(existing){
//         throw new Error("User already exist.")
//     }

//     const user = new User({id, username, password, email, blogs: []})
//     return userDb.createUser(user)
// }

// const getUsers = (): User[] => {
//     const allUsers: User[] = userDb.getUsers();
//     return allUsers;
// };

// const getUserById = (id: number): User => {
//     const res: User = userDb.getUserById({id});
//     return res;
// };

// const removeUserById = (id : number): User => {
//     const res: User = userDb.removeUserById(id)

//     return res
// }


// export default {
//     createUser, getUsers, getUserById, removeUserById
// }