import  categoryDB  from "../domain/data-access/category.db";
import { Category } from "../domain/model/category";
import {CategoryInput} from '../types';
import { Blog } from "../domain/model/blog";

const createCategory = ({
    name,
}: CategoryInput): Category => {

    const category = new Category({ name, blogs : []})
    
    return categoryDB.createCategory(category) ;
}

export default {createCategory}

