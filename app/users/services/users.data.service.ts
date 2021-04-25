import { IUser } from './../../models/user.model';
import { UserModuleConstants } from '../users.constants';
import { UserHttpService } from '../../core/services/user.http.service';
import { IPromise } from 'angular';

export class UsersDataService {

    static selector = UserModuleConstants.USER_SERVICE_NAME;
    totalUsers : IUser[] = new Array<IUser>();

    private _userHttpService: UserHttpService;


    /**
     * injects angular service and user data service
     */
    constructor(private $q : angular.IQService , private userHttpService : UserHttpService) {
        'ngInject';
        this._userHttpService = userHttpService;

    }

    /**
     * 
     * @returns Get All users from the server as promise
     */
    getAllUsers() : IPromise<IUser[]> {

        return this._userHttpService.GetAllUsers().then(userResponse => {
            if (userResponse.status === 200) {
                this.totalUsers =  userResponse.data;
                return this.$q.resolve(this.totalUsers);
            } else {
                this.$q.resolve([]);
            }
        }).catch(error => {
            console.log(JSON.stringify(error));
            return this.$q.resolve([]);

        });
    }
    /**
     * 
     * @param user Create an User
     */
    addUser(user : IUser) : IPromise<IUser> {

        return this._userHttpService.AddUser(user).then(userResponse => {
            if (userResponse.status === 200) {
                let addedUser  =  userResponse.data;
                return this.$q.resolve(addedUser);
            } else {
                this.$q.resolve(user);
            }
        }).catch(error => {
            console.log(JSON.stringify(error));
            return this.$q.resolve(user);

        });
    }

    removeUser(user : IUser): IPromise<IUser> {
        return this._userHttpService.RemoveUser(user.id).then(apiResponse => {
            if (apiResponse.status === 200) {
                return this.$q.resolve(user);
            }
        }).catch(error => {
            console.log(JSON.stringify(error));
            return this.$q.resolve(user);
        });
    }


}
