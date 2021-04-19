import { IUser } from './../../models/user.model';
import { UserModuleConstants } from "../users.constants";

export class UsersDataService{
    static selector = UserModuleConstants.USER_SERVICE_NAME;
    totalUsers : IUser[] = new Array<IUser>();


    /**
     *
     */
    constructor(private $q : angular.IQService) {
        'ngInject';
    }

    getAllUsers(){
        return this.$q.resolve(this.totalUsers)
    }

    addUser(user : IUser)
    {
        this.totalUsers.push(user)
    }

    removeUser(user : IUser)
    {
        this.totalUsers = this.totalUsers.filter(userItem => user.Id !== userItem.Id)
    }
   
}