export type Blog = {
    id: string,
    name: string,
    description: string,
    websiteUrl: string
}

export type Post = {
    id: string,
    title: string,
    shortDescription: string,
    content: string,
    blogId: string,
    blogName: string
}

export let bdBlogs: Array <Blog> = [ {
    "id": "1",
    "name": "NameBlog",
    "description": "DescName",
    "websiteUrl": "http://test.test"
}]

export let bdPosts: Array <Post> = [
    {
        id: "1",
        title: "testPost",
        shortDescription: "testDesPost",
        content: "testConPost",
        blogId: "1",
        blogName: "NameBlog"
    }
];
