import { AddUserContainerComponent } from "./containers/add-user/add-user.container";
import { UserListContainerComponent } from "./containers/users-list/users.container";


export const userRouting = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('add-user', {
      parent: 'app',
      url: '/user/add',
      component: AddUserContainerComponent.selector
    })

    .state('user', {
      parent: 'app',
      url: '/user',
      component: UserListContainerComponent.selector
    });
};
