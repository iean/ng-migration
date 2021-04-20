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
        this.usersService.addUser(user);
        JSON.stringify(user);
        this.$state.go('users');
    }

}

export  class AddUserContainerComponent implements angular.IComponentOptions {
    static selector = 'addUser';
    static controller = AddUserContainerComponentController;
    static template = require('./add-user.container.html');
}
