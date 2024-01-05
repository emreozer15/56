import { Category } from "../model/category";
import blogDb from "./blog.db";

const categories = [];

    // const c1 = new Category({ id: 1, name: "Romance", blogs: blogDb.getAllBlogs()})
    // categories.push(c1)

const createCategory = ({id, name, blogs}: Category): Category => {
    const category = new Category( {
        id,
        name,
        blogs
    })
    categories.push(category);
    return category;
}

const getAllCategories = (): Category[] => categories;

const getCategoryById = ({
    id
}: {
    id: number;
}): Category | null => {
    for (const b of categories){
        if (b.id == id){
            return b;
        }
    }
}

export default { 
    getCategoryById,
    createCategory,
    getAllCategories
};
