import {
    User as UserPrisma,
    Blog as BlogPrisma
} from '@prisma/client'

import { User } from "./user";
import { Comment } from "./comment";

export class Blog{    
    readonly id: number
    readonly title: String
    readonly caption: String
    readonly User: User


    constructor(blog: {        
        id?: number;
        title: String;
        caption: String;
        user: User

        
    }) {      
        this.validate(blog);
        this.id = blog.id
        this.title = blog.title
        this.caption = blog.caption
        this.User = blog.user
    }
    validate(blog: { id?: number; title: String; caption: String; }) {
        if(blog.title.length === 0){
            throw new Error("Title cannot be empty.")
        }

        if(blog.caption.length === 0){
            throw new Error("Caption cannot be empty.")
        }
    }

    static from({
        id,
        title,
        caption,
        user
    }: BlogPrisma & { user: UserPrisma }) {
        return new Blog({
            id,
            title,
            caption,
            user: User.from(user)
        })
    }

}