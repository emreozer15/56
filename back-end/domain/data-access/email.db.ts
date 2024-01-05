import { Email } from "../model/email";

const emails = [];

const createEmail = ({ id, adres }: Email): Email => {
    const email = new Email({ id, adres });
    emails.push(email);
    return email;
}

const getEmails = (): Email[] => emails;

const getEmailById = ({ id }: { id: number }): Email | null => {
    for (const e of emails){
        if (e.id === id){
            return e;
        }
    }
    return null;
}

const checkEmailAlreadyExists = (adres: string): boolean => {
    let exist = false;
    emails.forEach(u => {
        if (u.adres = adres){
            exist = true;
        }
    });
    return exist;
}

export default {
    createEmail,
    getEmails,
    getEmailById,
    checkEmailAlreadyExists
}
