/**
 * @swagger
 * components:
 *  schemas:
 *    Email:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        adres:
 *          type: string
 */

import express, { Request, Response } from 'express';
import emailService from '../service/email.service';
import { EmailInput } from '../types'; // Assuming EmailInput type is defined in types file

const emailRouter = express.Router();

/**
 * @swagger
 * /email:
 *   post:
 *     summary: Create a new email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmailInput'
 *     responses:
 *       200:
 *         description: The created email.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Email'
 */

emailRouter.post("/add", (req: Request, res: Response) => {
  try {
    const email = <EmailInput> req.body;
    const result = emailService.createEmail(email);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ status: 'error', errorMessage: error.message });
  }
});

emailRouter.get("/", (req: Request, res: Response) => {
  try {
    const allEmails = emailService.getEmails();
    res.status(200).json(allEmails);
  } catch (error) {
    res.status(500).json({ status: 'error', errorMessage: error.message });
  }
});




export { emailRouter };
