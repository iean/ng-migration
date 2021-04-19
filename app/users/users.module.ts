import angular = require("angular");
import { AddUserContainerComponent } from "./containers/add-user/add-user.container";
import { UserListContainerComponent } from "./containers/users-list/users.container";
import { UsersDataService } from "./services/users.data.service";
import { userRouting } from "./users.routes";



export const moduleName = angular.module('application.users',['ui.router'])
// registering contianer components
.component(AddUserContainerComponent.selector , AddUserContainerComponent)
.component(UserListContainerComponent.selector , UserListContainerComponent)

.service(UsersDataService.selector,UsersDataService)

/**
 * Register Routes
 */
.config(userRouting)
.name;
