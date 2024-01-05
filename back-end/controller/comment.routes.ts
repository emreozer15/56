/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 *  schemas:
 *    Comment:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        comment:
 *          type: string
 */

import express, {Request, Response} from 'express';
import commentService from '../service/comment.service';
import { CommentInput } from '../types';


const commentRouter = express.Router();

/**
 * @swagger
 * /comment:
 *   post:
 *     summary: Create a new comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommentInput'
 *     responses:
 *       200:
 *         description: The created comment.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 */

commentRouter.post("/add" , (req: Request, res: Response) => {
try {
    const comment = <CommentInput> req.body;
    const result = commentService.createComment(comment)
    res.status(200).json(result)
}catch (error) {
    res.status(400).json({status: 'error', errorMessage: error.message });

}

});

export { commentRouter };

