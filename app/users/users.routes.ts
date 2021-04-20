import { AddUserContainerComponent } from "./containers/add-user-container/add-user.container";
import { UserListContainerComponent } from "./containers/user-container/users.container";


export const userRouting = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('addUser', {
      parent: 'app',
      url: '/user/add',
      component: AddUserContainerComponent.selector
    })
    .state('editUser', {
      parent:'app',
      url: "/user/add/:sID", // added :sID for dynamic ID param
      component: AddUserContainerComponent.selector
    })
    .state('users', {
      parent: 'app',
      url: '/user',
      component: UserListContainerComponent.selector
    });
    
};
