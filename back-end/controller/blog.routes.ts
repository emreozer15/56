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
 *        user:
 *          $ref: '#/components/schemas/User'
 *        comments:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Comment'
 *        category:
 *          $ref: '#/components/schemas/Category'
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



blogRouter.post("/" , (req: Request, res: Response) => {
try {
    const blog = <BlogInput> req.body;
    const result = blogService.createBlog(blog)
    res.status(200).json(result)
}catch (error) {
    res.status(400).json({status: 'error', errorMessage: error.message });

}

});

export { blogRouter };
