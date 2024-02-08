import mongoose from "mongoose";

/**
 *  type: String,
    required: true/false,
    unique: true/false,
    min: 3,
    max: 20,
    default: true/false
 * 
 */

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 20
    },
    password: {
        type: String,
        unique: true,
        min: 6
    },
    image: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true }); // if we create an user , it's gonna create the creation date automatically.


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    userId: {
        type: String, 
        required: true,
    },
    slug: {
        type: String, 
        required: true,
        unique: true,
    },
}, { timestamps: true }); // if we create a post , it's gonna create the creation date automatically.

// If there is an existing model use that, otherwise create one.
export const User = mongoose.models.User || mongoose.model("User", userSchema); 
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema); 

// এখন এই মডেল ইউজ করে আমি নতুন ইউজার/পোস্ট fetch, CRUD করতে পারবো।
