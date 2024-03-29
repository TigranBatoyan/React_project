import Posts from "./posts";
import Users from "./users";

const Api = {
    posts:new Posts(),
    users:new Users(),
}
export const getPosts = Api.posts.getPosts()
export const getUsers = Api.users.getUsers()
export const loginHandler = Api.users.loginHandler
export const registerHandler = Api.users.registerHandler
export const addPost = Api.posts.addPost
export const getById = Api.users.getById
export const getPostsById = Api.users.getPostsById