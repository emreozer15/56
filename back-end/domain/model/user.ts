import { Blog } from "./blog";
import { Comment } from "./comment";
import { Email } from "./email";

import { User as UserPrisma} from '@prisma/client'

export class User {
    readonly id: Number;
    readonly username: String;
    readonly password: String;
    readonly email: Email;

    constructor(user: {        
        id?: Number;
        username: String;
        password: String;        
        email: Email;

    }) {        
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
    }

    // validate(user: {        
    //     id?: Number;
    //     username: String;
    //     password: String;
    //     // blogs: Blog[];
    //     // email: Email;
    // }) {
    //     if (!user.username || user.username.length === 0) {
    //         throw new Error("Name cannot be empty.");
    //     }

    //     if (!user.password || user.password.length < 8) {
    //         throw new Error("Password must be at least 8 characters long.");
    //     }

    //     // if (!user.email) {
    //     //     throw new Error("Email cannot be empty.");
    //     // }
    // }


    static from({
        id,
        username,
        password,
        email
    }: UserPrisma ) {
        return new User({
            id,
            username,
            password, 
            email
        })
    }

}