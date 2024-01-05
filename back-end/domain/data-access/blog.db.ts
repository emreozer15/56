import { Blog } from "../model/blog";
import commentDb from "./comment.db";
import categoryDb from "./category.db";
import { Category } from "../model/category";
import { User } from "../model/user";
import database from "../../util/database";


// let blogs = [];

const createBlog = async ({title, caption, userId}: {title:string, caption: string, userId: number}): Promise<Blog> => {
    try {
        const blogPrisma = await database.blog.create({
            data: {
                title,
                caption,
                user: { connect : {id: userId} },
            },
            include: {
                user : true,
            },
        })
        return Blog.from(blogPrisma)
    } catch (error) {
        console.error(error);
        throw new Error("Database error")
    }
}


const getAllBlogs = async (): Promise<Blog[]> => {
    const blogPrisma = await database.blog.findMany({
        include: {
            user: true
        }
    })
    return blogPrisma.map((blogPrisma) => Blog.from(blogPrisma))
} ;




export default { 
    // checkBlogAlreadyExists,
    // getBlogById,
    createBlog,
    getAllBlogs
    // removeBlogById
};
