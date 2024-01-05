/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 *  schemas:
 *    Blog:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        title:
 *          type: string
 *        caption:
 *          type: string
 *        comments:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Comment'
 */

import express, {Request, Response} from 'express';
import { BlogInput } from '../types';
import blogService from '../service/blog.service';


const blogRouter = express.Router();

/**
 * @swagger
 * /blog:
 *   post:
 *     summary: Create a new blog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogInput'
 *     responses:
 *       200:
 *         description: The created blog.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */



blogRouter.post("/add" , (req: Request, res: Response) => {
try {
    const blog = <BlogInput> req.body;
    const result = blogService.createBlog(blog)
    res.status(200).json(result)
}catch (error) {
    res.status(400).json({status: 'error', errorMessage: error.message });

}

});

blogRouter.get("/", (req: Request, res: Response) => {
    try {
      const allBlogs = blogService.getBlogs();
      res.status(200).json(allBlogs);
    } catch (error) {
      res.status(500).json({ status: 'error', errorMessage: error.message });
    }
  });

  blogRouter.delete('/delete/:id', (req: Request, res: Response) => {
    try {
      const blogIdToDelete = parseInt(req.params.id, 10); // Extract the blog ID from URL params
        const deletedBlog = blogService.removeBlogById(blogIdToDelete);
  
      if (deletedBlog) {
        res.status(200).json({ message: 'Blog deleted successfully' });
      } else {
        res.status(404).json({ message: 'Blog not found' });
      }
    } catch (error) {
      res.status(500).json({ status: 'error', errorMessage: error.message });
    }
  });

export { blogRouter };
