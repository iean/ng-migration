import { IUser } from '../../models/user.model';
import { UserModuleConstants } from '../../users/users.constants';
import { BaseHttpService, ApiStringConstants } from './base.http.service';
import { IHttpResponse, IPromise } from 'angular';
/**
 * This class is used to call user service through network
 * right now we are using json--server
 * GET    /posts
 * GET    /posts/1
 * POST   /posts
 * PUT    /posts/1
 * PATCH  /posts/1
 * DELETE /posts/1
 */
class UserHttpService  extends BaseHttpService{

    static Name: string = UserModuleConstants.USER_HTTP_SERVICE_NAME;
    /// initialize with http service
    constructor(private $http : angular.IHttpService) {
        'ngInject';
        super($http);
    }


    /**
     *
     * @returns a promise of user list
     */
    GetAllUsers() : IPromise<IHttpResponse<IUser[]>> {
        return this._httpService.get<IUser[]>(this.GetFullApiUrl(ApiStringConstants.USER_API_ENDPOINT));
    }

    /**
     *
     * @param id Id of the user to get the details
     * @returns User details object
     */
    GetUserDetails(id : number):IPromise<IHttpResponse<IUser>> {
        return this._httpService.get(this.GetFullApiUrl(ApiStringConstants.USER_API_ENDPOINT + '/' + id));
    }

    /**
     *
     * @param user Add a new user to the databse
     * @returns
     */
    AddUser(user : IUser):IPromise<IHttpResponse<IUser>> {
        return this._httpService.post(this.GetFullApiUrl(ApiStringConstants.USER_API_ENDPOINT), user);
    }


    /**
     *
     * @param user the user object that needs to be updated
     * @param id database id of the user
     * @returns returns a response of user updated
     */
    EditUser(user: IUser , id : number) :IPromise<IHttpResponse<IUser>> {
        return this._httpService.put(this.GetFullApiUrl(ApiStringConstants.USER_API_ENDPOINT + '/' + id), user);
    }


    /**
     *
     * @param id Id of the record to be deleted
     * @returns
     */
    RemoveUser(id : number) {
        return this._httpService.delete(this.GetFullApiUrl(ApiStringConstants.USER_API_ENDPOINT + '/' + id));

    }

}

export { UserHttpService };
