// import { Email } from "../model/email";
// import { User } from "../model/user";
// import blogDb from "./blog.db";
// import commentDb from "./comment.db";
import { connect } from "http2";
import database from "../../util/database";
import { User } from "../model/user";

// let users = [];
//     // const u1 = new User({id: 1, name: "fre,ioe", password: ",neorfjzn", comments: commentDb.getComments(), blogs: blogDb.getAllBlogs()})
//     // users.push(u1)

const createUser = async ({username, password, emailId}: {username: string, password:string, emailId: number}): Promise<User> => {
    try {
        const userPrisma = await database.user.create({
            data: {
                username,
                password,
                email: { connect : { id: emailId} },
            },
            include: {
                email: true,
            }
        });
        return User.from(userPrisma)    
    } catch (error) {
        console.error(error);
        throw new Error("Database error")
    }
}

const getUsers = async (): Promise<User[]> => {
    const userPrisma = await database.user.findMany({
        include: {
            blogs: true
        }
    })
    return userPrisma.map((userPrisma) => User.from(userPrisma))
};


// const getUserById = ({
//     id
// }: {
//     id: number;
// }): User | null => {
//     for (const b of users){
//         if (b.id == id){
//             return b;
//         }
//     }
// }

// const checkUserAlreadyExists = (username:string, password: string, email: Email): boolean => {
//     let exist = false;
//     users.forEach(u => {
//         if (u.username == username && u.password == password && u.email == email){
//             exist = true;
//         }
//     });
//     return exist;
// }

// const removeUserById = (id : number): User => {
//     const user = getUserById({id})
//     const res = users.filter((user) => user.id !== id);
//     users = res;
//     return user
// }





export default { 
    createUser,
    getUsers
//     getUserById,
//     checkUserAlreadyExists,
//     removeUserById
};
