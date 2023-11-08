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
}