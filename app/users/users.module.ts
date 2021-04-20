import { UserList } from './components/user-list/user-list.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import angular = require('angular');
import { AddUserContainerComponent } from './containers/add-user-container/add-user.container';
import { UserListContainerComponent } from './containers/user-container/users.container';
import { UsersDataService } from './services/users.data.service';
import { userRouting } from './users.routes';



export const moduleName = angular.module('application.users',['ui.router'])




// registering single responsibility components
.component(AddUserFormComponent.selector , AddUserFormComponent)
.component(UserList.selector , UserList)

// registering contianer components
.component(AddUserContainerComponent.selector , AddUserContainerComponent)
.component(UserListContainerComponent.selector , UserListContainerComponent)


/** user service registration */
.service(UsersDataService.selector, UsersDataService)

/**
 * Register Routes
 */
.config(userRouting)
.name;
