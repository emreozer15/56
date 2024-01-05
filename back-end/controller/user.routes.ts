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
 *        username:
 *          type: string
 *        email:
 *          $ref: '#/components/schemas/Email'
 *        password:
 *          type: string
 *        blogs:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Blog'
 */

import express, {Request, Response} from 'express';
import { UserInput } from '../types';
import userService from '../service/user.service';


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


userRouter.post("/add" , (req: Request, res: Response) => {
try {
    const user = <UserInput> req.body;
    const result = userService.createUser(user)
    res.status(200).json(result)
}catch (error) {
    res.status(400).json({status: 'error', errorMessage: error.message });

}

userRouter.get("/", (req: Request, res: Response) => {
    try {
      const allUsers = userService.getUsers();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ status: 'error', errorMessage: error.message });
    }
  });

userRouter.get("/:id", (req: Request, res: Response) => {
    try {
      const userId: number = parseInt(req.params.id, 10);
      const foundUser = userService.getUserById(userId);

      if (foundUser) {
          res.status(200).json(foundUser);
      } else {
          res.status(404).json({ status: 'error', errorMessage: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ status: 'error', errorMessage: error.message });
    }
  });

  userRouter.delete('/delete/:id', (req: Request, res: Response) => {
    try {
      const userIdToDelete = parseInt(req.params.id, 10); // Extract the blog ID from URL params
        const deletedUser = userService.removeUserById(userIdToDelete);
  
      if (deletedUser) {
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ status: 'error', errorMessage: error.message });
    }
  });



});



export { userRouter };
