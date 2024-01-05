export class Email {    
    readonly id: Number;
    readonly adres: String;


    constructor(email: {        
        id?: Number;
        adres: String;
    }) {        
        this.id = email.id;
        this.adres = email.adres;
    }
    
    validate(email: { id?: number; adres: string; }) {
        if (email.adres.length === 0) {
            throw new Error("Email adres cannot be empty.");
        }
    }

}