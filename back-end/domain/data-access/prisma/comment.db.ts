import { Comment } from "../model/comment";
import userDb from "./user.db";
import blogDb from "./blog.db";

const comments = [];
    // const c1 = new Comment({id: 1, name: "fnoz", date: new Date("2023-09-25T13:00:00Z"), user: userDb.getUserById({id: 1}), blog: blogDb.getBlogById({id: 1})})
    //comments.push(c1)

const createComment = ({ name, date, user, blog}: Comment): Comment => {
    const comment = new Comment( { name, date, user, blog})
    comments.push(comment)
    return comment;
}

const getComments = (): Comment[] => comments;

const getCommentById = ({
    id
}: {
    id: number;
}): Comment | null => {
    for (const b of comments){
        if (b.id == id){
            return b;
        }
    }
}

export default{
    createComment,
    getComments,
    getCommentById
}





