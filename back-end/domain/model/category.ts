import { Blog } from "./blog";

export class Category{    
    readonly id: number
    readonly name: String
    readonly blogs: Blog[]

    constructor(category: {        
        id?: number
        name: String
        blogs: Blog[]
    }) {        
        this.id = category.id;
        this.name = category.name;
        this.blogs = category.blogs;
    }
    
    validate(category: { id?: number; name: String; blogs: Blog[]; }) {
        if (category.name.length === 0) {
            throw new Error("Category name cannot be empty.")
        }

        if (category.blogs.length === 0) {
            throw new Error("At least one blog should be associated with the category.")
        }
    }


}