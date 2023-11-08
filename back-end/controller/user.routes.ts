/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *        password:
 *          type: string
 *        comments:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Comment'
 *        blogs:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Blog'
 */

import express, {Request, Response} from 'express';
import { UserInput } from '../types';
import userService from '../service/blog.service';


const userRouter = express.Router();

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */


userRouter.post("/" , (req: Request, res: Response) => {
try {
    const user = <UserInput> req.body;
    const result = userService.createBlog(user)
    res.status(200).json(result)
}catch (error) {
    res.status(400).json({status: 'error', errorMessage: error.message });

}

});

export { userRouter };
