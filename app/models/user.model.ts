

export interface IUser{
    Id : string;
    firstName : string;
    sirName : string;
    isActive : string ;

}


export class DefaultUser implements IUser{
    Id: string;
    firstName: string;
    sirName: string;
    isActive: string;

}