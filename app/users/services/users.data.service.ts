import { IUser } from './../../models/user.model';
import { UserModuleConstants } from '../users.constants';
import { UserHttpService } from '../../core/services/user.http.service';
import { IPromise } from 'angular';

export class UsersDataService{

    static selector = UserModuleConstants.USER_SERVICE_NAME;
    totalUsers : IUser[] = new Array<IUser>();

    private _userHttpService: UserHttpService;


    /**
     * injects angular service and user data service
     */
    constructor(private $q : angular.IQService , private userHttpService :UserHttpService) {
        'ngInject';
        this._userHttpService = userHttpService;

    }

    /**
     * 
     * @returns Get All users from the server as promise
     */
    getAllUsers() : IPromise<IUser[]> {

        return this._userHttpService.GetAllUsers().then(userResponse=>{
            if(userResponse.status === 200) {
                this.totalUsers =  userResponse.data;
                return this.$q.resolve(this.totalUsers);
            }
        }).catch(error=>{
            console.log(JSON.stringify(error));
            return this.$q.resolve([]);

        });
    }
    /**
     * 
     * @param user Create an User
     */
    addUser(user : IUser) {
        this.totalUsers.push(user);
    }

    removeUser(user : IUser) {
        this.totalUsers = this.totalUsers.filter(userItem => user.id !== userItem.id)
    }


}
