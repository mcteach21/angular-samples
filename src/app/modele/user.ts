export class User {
	id?: number;
    firstName?: string;
    lastName?: string;
    login?: string;
    password?: string;
    token?: string;

    toString = () : string => {
       return this.firstName+' '+this.lastName;
    }
}
