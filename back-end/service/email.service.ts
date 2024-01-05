import { Email } from "../domain/model/email";
import { EmailInput } from "../types";
import emailDb from "../domain/data-access/email.db";

const createEmail = ({ id, adres }: EmailInput): Email => {
    if (!adres || adres.trim().length === 0) {
        throw new Error("Email address cannot be empty.");
    }

    const existing = emailDb.checkEmailAlreadyExists(adres);
    if(existing){
        throw new Error("email already exist.")
    }

    const email = new Email({ id, adres });
    return emailDb.createEmail(email);
}

const getEmails = (): Email[] => {
    // Assuming emailDB is an object with a method getAllEmails() to retrieve all emails
    const allEmails: Email[] = emailDb.getEmails();
    return allEmails;
};





export default {
    createEmail,
    getEmails
}
