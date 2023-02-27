import {bdBlogs, Blog} from "../bd/bd";


export const blogsRepository = {
    returnAllBlogs(){
        return bdBlogs;
    },
    findBlog(id: string){
        const foundBlog = bdBlogs.find(f => f.id === id)
        if(foundBlog){
            return foundBlog
        }
            return false
    },
    deleteBlog(id: string){
        for (let i = 0; i < id.length; i++) {
            if (bdBlogs[i].id === id){
                bdBlogs.splice(i,1)
                return true;
            }
        }
        return false
    },
    createBlog(blog: Blog){
        const newBlog = {
            id:'' + (+(new Date())),
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl
        }
        bdBlogs.push(newBlog)
        return newBlog;
    },
    updateBlogById(id: string, blog: Blog){
        const updateBlog = bdBlogs.find(f => f.id === id)
        if (updateBlog){
            updateBlog.name = blog.name
            updateBlog.websiteUrl = blog.websiteUrl
            updateBlog.description = blog.description
            return true
        }
        return null
    },
    deleteAllData(){
        return bdBlogs.splice(0,bdBlogs.length)
    }
}

