import { Blog } from "./blog";
import { Comment } from "./comment";

export class User {    
    readonly id: Number;
    readonly name: String;
    readonly password: String;
    readonly comments: Comment[];
    readonly blogs: Blog[];

    constructor(user: {        
        id?: Number;
        name: String;
        password: String;
        comments: Comment[];
        blogs: Blog[];
    }) {
        this.name = user.name;
        this.id = user.id;
        this.password = user.password;
        this.comments = user.comments || [];
        this.blogs = user.blogs || [];
    }

}