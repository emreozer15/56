import { User } from "./user";
import { Blog } from "./blog";

export class Comment{
 
    readonly id : number;
    readonly comment: String;
    

    constructor(comment: {        
        id?: number;
        comment: String;
        Blog: Blog

    }) {        
        this.id = comment.id;
        this.comment = comment.comment;

    }

    validate(comment: { id?: number; comment: String; }) {
        if (comment.comment.length === 0) {
            throw new Error("Comment cannot be empty.");
        }
    }
    
}