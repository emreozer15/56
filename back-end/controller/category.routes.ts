/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 *  schemas:
 *    Category:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *        blogs:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Blog'
 *    categoryInput:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *        blogs:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Blog'
 *    Error:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *        errorMessage:
 *          type: string
 */

import express, {Request, Response} from 'express';
import categoryService from '../service/category.service';
import { CategoryInput } from '../types';


const categoryRouter = express.Router();

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create a new category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryInput'
 *     responses:
 *       200:
 *         description: The created category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */

categoryRouter.post("/" , (req: Request, res: Response) => {
try {
    const category = <CategoryInput> req.body;
    const result = categoryService.createCategory(category)
    res.status(200).json(result)
}catch (error) {
    res.status(400).json({status: 'error', errorMessage: error.message });

}

});

export { categoryRouter };




