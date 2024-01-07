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
    


}