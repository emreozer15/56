import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import { BlogInput} from '@/types';
import { types } from 'util';
import BlogService from '@/services/BlogService';
import Header from '@/components/Header';
import BlogsOverviewTable from '@/components/blogs/BlogsOverviewTable';


const Blogs: React.FC = () => {
    const [blogs, setBlogs] = useState<Array<BlogInput>>();

    const getBlogs = async () => {
        const response = await BlogService.getAllBlogs();
        const blogss = await response.json()
        setBlogs(blogss)
    }

    useEffect(() => {
        getBlogs()
        },
        []
    )



    return (
        <>
        <Head>
            <title>Blogs</title>
        </Head>
        <Header></Header>

        <main className={styles.main}>        

        <h1>Blogs</h1>
        <section>
            {blogs && (
                <BlogsOverviewTable blogs={blogs}/>
            )}

        </section>
        </main>

        </>
        
    );
};

export default Blogs;


