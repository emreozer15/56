import { Blog } from "../model/blog";
import userDb from "./user.db";
import commentDb from "./comment.db";
import categoryDb from "./category.db";
import { Category } from "../model/category";
import { User } from "../model/user";

const blogs = [];
    // const b1 = new Blog({id: 1, title: "jeje", caption: "papaoute", user: userDb.getUserById({id: 1}), comments: commentDb.getComments(), category: categoryDb.getCategoryById({id: 1}) })
    // blogs.push(b1)

const createBlog = ({id, title, caption, user, comments, category}: Blog): Blog => {
    const blog = new Blog({
        title, 
        caption, 
        user,
        comments: [],
        category
    })

    blogs.push(blog);
    return blog;
}

const getBlogById = ({
    id
}: {
    id: number;
}): Blog | null => {
    for (const b of blogs){
        if (b.id == id){
            return b;
        }
    }
}

const getAllBlogs = (): Blog[] => blogs;

const checkBlogAlreadyExists = (title: string, caption: string, user: User, category: Category): boolean => {
    let exist = false;
    blogs.forEach(b => {
        if (b.title == title && b.caption && caption, b.user && user, b.category && category){
            exist = true;
        }
    });
    return exist;
}


export default { 
    checkBlogAlreadyExists,
    getBlogById,
    createBlog,
    getAllBlogs
};
