import blogDb from "../domain/data-access/blog.db";
import commentDb from "../domain/data-access/comment.db";
import userDb from "../domain/data-access/user.db";
import { Comment } from "../domain/model/comment";
import { CommentInput } from "../types"
import { UserInput } from "../types"
import { BlogInput } from "../types"


const createComment = ({ id, comment}: CommentInput): Comment => {


    //validations

    if (!comment || comment.trim() === '') {
        throw new Error("Comment cannot be empty.");
    }
    
    const newComment = new Comment({id, comment})
    return commentDb.createComment(newComment);
}

export default {
    createComment
}