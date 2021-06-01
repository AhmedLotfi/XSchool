export class UserModel {
    firstName: string;
    lastName: string;
    email: string;
    isAccepted: boolean;
    role: number | string;

    constructor(firstName: string, lastName: string, email: string, isAccepted: boolean, role: number | string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAccepted = isAccepted;
        this.role = role;
    }
}