
const getAllBlogs = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/blogs", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
}

const getBlogById = (blogId: string) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/blogs/${blogId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
}


const removeBlogById = (blogId: string) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/blogs/delete/${blogId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}


const BlogService = {
    getAllBlogs,
    getBlogById,
    removeBlogById
}

export default BlogService;