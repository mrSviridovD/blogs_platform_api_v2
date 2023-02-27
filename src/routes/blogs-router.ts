import {Request, Response, Router} from "express";
import {blogsRepository} from "../repositories/blogs-repository";
import {body, validationResult} from "express-validator";

export const blogsRouter = Router({});

blogsRouter.get('/', (req:Request,res:Response) => {
    res.send(blogsRepository.returnAllBlogs());
})

blogsRouter.get('/:id', (req:Request,res:Response) => {
    if(blogsRepository.findBlog(req.params.id)){
        res.send(blogsRepository.findBlog(req.params.id))
    }
    else{
        res.sendStatus(404)
    }
})

blogsRouter.delete('/:id', (req:Request,res:Response) => {
    if(blogsRepository.deleteBlog(req.params.id)){
        res.sendStatus(204)
    }else{
        res.sendStatus(404)
    }
})

blogsRouter.post('/',
    body('name').isLength({min:5, max:10}),
    (req:Request,res:Response) => {
    const newBlog = blogsRepository.createBlog(req.body)
    res.status(201).send(newBlog)
})

blogsRouter.put('/:id',(req:Request,res:Response) => {
    const updateBlog = blogsRepository.updateBlogById(req.params.id, req.body)
    if(updateBlog){
        res.sendStatus(204)
    }else {
        res.sendStatus(404)
    }
})