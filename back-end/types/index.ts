export type CategoryInput = {
    id?: number;
    name?: string;
    blogs?: BlogInput[];
}

export type BlogInput = {
    id?: number;
    title?: string;
    caption?: string;
    user?: UserInput;
    comments?: CommentInput[];
    category?: CategoryInput;
}

export type UserInput = {
    id?: number; //required bcs ? is not here
    name?: string; // optional bcs ?
    password?: string;
    comments?: CommentInput[];
    blogs?: BlogInput[];
}

export type CommentInput = {
    id?: number; //required bcs ? is not here
    name?: string; // optional bcs ?
    date?: Date;
    user?: UserInput;
    blog?: BlogInput;
}

