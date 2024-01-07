import { BlogInput } from "@/types";


type Props = {
    blog: BlogInput
}


const BlogInfo: React.FC<Props> = ({blog}: Props) => {
    return (
        <>
            {blog && (
                <div>
                    <p>{blog.id}</p>
                    <p>{blog.title}</p>
                    <p>{blog.caption}</p>
                </div>
            )}
        </>
    )

}

export default BlogInfo;