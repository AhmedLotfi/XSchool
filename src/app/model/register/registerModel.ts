export class RegisterModel {

    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    role: number | string;

    constructor(userName: string, password: string, firstName: string, lastName: string, email: string, dob: string, role: string | number) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dateOfBirth = dob;
        this.role = role;
    }
}