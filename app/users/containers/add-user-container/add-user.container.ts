import { IUser } from '../../../models/user.model';
import { UsersDataService } from '../../services/users.data.service';
import { ILogService } from 'angular';

class AddUserContainerComponentController {
    constructor(
        private usersService : UsersDataService, private $state: angular.ui.IStateService
    ) {
        'ngInject';
    }

    $onInit(): void {
        console.log('Init in add user component controller');
    }
    add(user : IUser)  {
        this.usersService.addUser(user).then(()=>{
            this.$state.go('users');
        });
        this.$state.go('users');
    }

}

export  class AddUserContainerComponent implements angular.IComponentOptions {
    static selector = 'addUser';
    static controller = AddUserContainerComponentController;
    static template = require('./add-user.container.html');
}
