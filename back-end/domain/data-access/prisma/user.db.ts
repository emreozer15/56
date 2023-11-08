import { User } from "../model/user";
import blogDb from "./blog.db";
import commentDb from "./comment.db";

const users = [
];
    // const u1 = new User({id: 1, name: "fre,ioe", password: ",neorfjzn", comments: commentDb.getComments(), blogs: blogDb.getAllBlogs()})
    // users.push(u1)

const createUser = ({id, name, password, comments, blogs}: User): User => {
    const user = new User( {
        name,
        password,
        comments: [],
        blogs: []
    })

    users.push(user);
    return user;
}

const getUserById = ({
    id
}: {
    id: number;
}): User | null => {
    for (const b of users){
        if (b.id == id){
            return b;
        }
    }
}

export default { 
    createUser,
    getUserById
};
