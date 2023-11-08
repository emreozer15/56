import blogDb from "../domain/data-access/blog.db";
import commentDb from "../domain/data-access/comment.db";
import userDb from "../domain/data-access/user.db";
import { Comment } from "../domain/model/comment";
import { CommentInput } from "../types"
import { UserInput } from "../types"
import { BlogInput } from "../types"


const createComment = ({ name, date, user: userInput, blog: blogInput}: CommentInput): Comment => {
    
    const user = userDb.getUserById({ id: userInput.id })
    const blog = blogDb.getBlogById({ id: blogInput.id })
    
    const comment = new Comment({name, date, user, blog})
    return commentDb.createComment(comment);
}

export default {
    createComment
}