import React from "react";
import { BlogInput } from "@/types";
import { table } from "console";
import styles from '@/styles/Home.module.css'
import BlogService from "@/services/BlogService";


type Props = {
    blogs: Array<BlogInput>
}

const BlogsOverviewTable: React.FC<Props> = ({blogs}: Props) => {

    const handleDelete = (blogId: string) => {

        BlogService.removeBlogById(blogId);

        console.log(`Delete blog with ID: ${blogId}`);
    };
      
    return (
        <>
        {(
            <table className={styles.table}>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={index}>
                            <td>
                            <div className={styles.blog}>
                            <div className={styles.blog_title}>{blog.title}</div>
                            <div className={styles.blog_caption}>{blog.caption}</div>
                            <button onClick={() => { handleDelete((index+1).toString());}}>Delete</button>
                            </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>

                
        )}
        </>
    )
}


export default BlogsOverviewTable;
