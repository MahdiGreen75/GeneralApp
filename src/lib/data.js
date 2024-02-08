import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";


// TEMPORARY DATA
// const users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Jane"},
//     {id: 4, name: "Johnny"},
//     {id: 3, name: "Jack"},
// ]


// const posts = [
//     {id: 1, title: "Post 1", body: "....", userId: 1},
//     {id: 2, title: "Post 2", body: "....", userId: 2},
//     {id: 3, title: "Post 3", body: "....", userId: 3},
//     {id: 4, title: "Post 4", body: "....", userId: 4},
// ]

// DATA USING MONGODB-MONGOOSE ODM

export const getPosts = async () => {
    try {
        connectToDB();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        console.log("Error inside getPosts", err);
        throw new Error("Failed to fetch posts!");
    }
}

export const getPost = async (slug) => {
    try {
        connectToDB();
        const post = await Post.findOne({slug:slug});
        return post;
    } catch (err) {
        console.log("Error inside getPost", err);
        throw new Error("Failed to fetch single post!");
    }
}

export const getUser = async (id) => {
    noStore();
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log("Error inside getUser", err);
        throw new Error("Failed to fetch user!");
    }
}

export const getUsers = async () => {
    try {
        connectToDB();
        const user = await User.find();
        return user;
    } catch (err) {
        console.log("Error inside getUsers", err);
        throw new Error("Failed to fetch users!");
    }
}
