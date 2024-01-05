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
    // comments?: CommentInput[];
}

export type UserInput = {
    id?: number; //required bcs ? is not here
    username?: string; // optional bcs ?
    password?: string;
    // blogs?: BlogInput[];
    email?: EmailInput;
}

export type CommentInput = {
    id?: number; //required bcs ? is not here
    comment?: string;

}

export type EmailInput = {
    id?: number;
    adres?: string;
}