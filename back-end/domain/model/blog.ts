import { User } from "./user";
import { Comment } from "./comment";
import { Category } from "./category";
import { scheduler } from "timers/promises";

export class Blog{    
    readonly id: number
    readonly title: String
    readonly caption: String
    readonly user: User
    readonly comments: Comment[]
    readonly category: Category

    constructor(blog: {        
        id?: number;
        title: String;
        caption: String;
        user: User
        comments: Comment[]
        category: Category

    }) {      
        this.validate(blog);
        this.id = blog.id
        this.title = blog.title
        this.caption = blog.caption
        this.user = blog.user
        this.comments = blog.comments
        this.category = blog.category

    }
    validate(blog: { id?: number; title: String; caption: String; user: User; comments: Comment[]; category: Category; }) {
        if(blog.title.length == 0){
            throw new Error("Title cannot be empty.")
        }

    }
}