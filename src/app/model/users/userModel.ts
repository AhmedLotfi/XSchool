export class UserModel {
    id:number;
    firstName: string;
    lastName: string;
    email: string;
    isAccepted: boolean;
    role: number | string;

    constructor(id:number,firstName: string, lastName: string, email: string, isAccepted: boolean, role: number | string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAccepted = isAccepted;
        this.role = role;
    }
}