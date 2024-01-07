import { Blog } from "./blog";
import { Comment } from "./comment";
import { Email } from "./email";

import { User as UserPrisma} from '@prisma/client'

export class User {
    readonly id: Number;
    readonly username: String;
    readonly password: String;
    readonly email?: Email; // Make the property optional

    constructor(user: {
        id?: Number;
        username: String;
        password: String;
        email?: Email; // Make the property optional
    }) {
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
    }

    static from({
        id,
        username,
        password,
    }: UserPrisma) {
        return new User({
            id,
            username,
            password
                });
    }
}
