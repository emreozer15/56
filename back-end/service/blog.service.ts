import { Blog } from "../domain/model/blog";
import blogDb from "../domain/data-access/blog.db";
import {BlogInput} from '../types';
import userDb from "../domain/data-access/user.db";
import categoryDb from "../domain/data-access/category.db";


// const createBlog = ({
//     title,
//     caption,
//     userId
// }: {title: string, caption: string, userId: number}) : Promise<Blog> => {

//     // const existing = blogDb.checkBlogAlreadyExists(title, caption);

//     //validation
//     // if(existing){
//     //     throw new Error("Blog already exist.")
//     // }

//     return blogDb.createBlog({title, caption, userId})
// }

// const getBlogs = (): Promise<Blog[]> => {
//     const allBlogs: Promise<Blog[]> = blogDb.getAllBlogs();
//     return allBlogs;
// };

// // const getBlogById = (id: number): Promise<Blog> => {
// //     const res: Promise<Blog> = blogDb.getBlogById({id});
// //     return res;
// // };


// // const removeBlogById = (id : number): Blog => {
// //     const res: Blog = blogDb.removeBlogById(id)

// //     return res
// // }


// export default {
//     createBlog,
//     getBlogs,
//     // removeBlogById
// }
