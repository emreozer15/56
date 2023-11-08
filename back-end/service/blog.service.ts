import { Blog } from "../domain/model/blog";
import blogDb from "../domain/data-access/blog.db";
import {BlogInput} from '../types';
import userDb from "../domain/data-access/user.db";
import categoryDb from "../domain/data-access/category.db";


const createBlog = ({
    title,
    caption,
    user: userInput,
    category: categoryInput
}: BlogInput) : Blog => {

    const user = userDb.getUserById({id: userInput.id})
    const category = categoryDb.getCategoryById({id: categoryInput.id})


    const existing = blogDb.checkBlogAlreadyExists(title, caption, user, category);

    if(existing){
        throw new Error("Blog already exist.")
    }



    const blog = new Blog({title, caption, user, comments: [], category})
    return blogDb.createBlog(blog)
}


export default {createBlog}
