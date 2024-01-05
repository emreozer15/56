import  categoryDB  from "../domain/data-access/category.db";
import { Category } from "../domain/model/category";
import {CategoryInput} from '../types';
import { Blog } from "../domain/model/blog";

const createCategory = ({
    id,
    name,
}: CategoryInput): Category => {
    
    if (!name || name.trim().length === 0) {
        throw new Error("Category name cannot be empty.");
    }

    const category = new Category({ id, name, blogs : []})
    
    return categoryDB.createCategory(category) ;
}

export default {createCategory}

