import {bdPosts, Post, bdBlogs} from "../bd/bd";


export const postsRepository = {
    returnAllPost(){
        return bdPosts;
    },

    findPost(id: string){
        if(bdPosts.find(f => f.id === id)){
            return bdPosts.find(f => f.id === id)
        }
        return false;
    },

    deletePost(id: string){
        const foundPost = bdPosts.find(p => p.id === id)
        if(foundPost){
            bdPosts.filter(p => p.id !== id)
            return true
        }
        return false
    },
    createPost(post: Post){
        const foundIdBlog = bdBlogs.find(f => f.id === post.blogId)
        if(!foundIdBlog){
            return null;
        } else{
        const newPost = {
            id:'' + (+(new Date())),
            title: post.title,
            shortDescription: post.shortDescription,
            content: post.content,
            blogId: post.blogId,
            blogName: post.blogName
        }
        bdPosts.push(newPost);
        return newPost;
        }
    },
    updatePostById(id: string, post: Post){
        const foundPost = bdPosts.find(f => f.id === id)
        const foundBlog = bdBlogs.find(f => f.id === post.blogId)
        if (foundPost && foundBlog){
                foundPost.title = post.title
                foundPost.shortDescription = post.shortDescription
                foundPost.content = post.content
                foundPost.blogId = post.blogId
                foundPost.blogName = post.blogName
            return foundPost
        }
        return null
    },
    deleteAllData(){
        return bdPosts.splice(0,bdPosts.length)
    }
}