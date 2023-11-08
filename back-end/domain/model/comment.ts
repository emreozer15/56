import { User } from "./user";
import { Blog } from "./blog";

export class Comment{    
    readonly id : number;
    readonly name: String;
    readonly date: Date;
    readonly user: User;
    readonly blog: Blog;

    constructor(comment: {        
        id?: number;
        name: String;
        date: Date;
        user: User;
        blog: Blog;
    }) {        
        this.id = comment.id;
        this.name = comment.name;
        this.date = comment.date;
        this.user = comment.user;
        this.blog = comment.blog;

    }
}