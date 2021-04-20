import { IUser } from '../../../models/user.model';
import { UsersDataService } from '../../services/users.data.service';
import { ILogService } from 'angular';
import { UserModuleConstants } from '../../users.constants';

import './users.container.scss';
class UserListContainerComponentController {

    userList : IUser[] = new Array<IUser>();
    constructor(
        private $log: ILogService, private usersService : UsersDataService
    ) {
        'ngInject';
     }

    $onInit(): void {
        this.fetchData();
    }

    private fetchData() {
        console.log('Getting All users for container list view');
        this.usersService.getAllUsers().then(users=>{
            this.userList = users;
            console.log(JSON.stringify(this.userList));
        }).catch(exception =>{
            console.log('Error Occured' + exception);
        });
    }

    private deleteUser(){

    }

    private editUser(){
        
    }

}

export class UserListContainerComponent implements angular.IComponentOptions {
    static selector = UserModuleConstants.USER_LIST_CONTAINER_COMPONENT;
    static controller = UserListContainerComponentController;
    static template = require('./users.container.html');
}
