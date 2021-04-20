import { IUser } from "./../../../models/user.model";
import { UsersDataService } from "../../services/users.data.service";
import { ILogService, IScope, ITimeoutService } from "angular";
import { UserModuleConstants } from "../../users.constants";

import "./users.container.scss";


class UserListContainerComponentController {
  usersList: Array<IUser> = new Array<IUser>();
  isDataPresent: boolean = false;
  constructor(
    private $log: ILogService,
    private usersService: UsersDataService,
    private $scope: IScope,
    private $timeout: ITimeoutService
  ) {
    "ngInject";
    this.fetchData();
  }

  $onInit(): void {}
  $onChanges(changesObj: any) {
    console.log(changesObj);
  }

  private fetchData() {
    console.log('Getting All users for container list view');
    this.usersService
      .getAllUsers()
      .then((users) => {
            this.usersList = users;
            this.isDataPresent = true;
      })
      .catch((exception) => {
        console.log('Error Occured' + exception);
        this.isDataPresent = true;
      });
  }

  private deleteUser(id: number) {
    console.log('Delete user with ID ' + id);
  }

  private editUser(user: IUser) {
    console.log("Editing user Object" + JSON.stringify(user));
  }
}

export class UserListContainerComponent implements angular.IComponentOptions {
  static selector = UserModuleConstants.USER_LIST_CONTAINER_COMPONENT;
  static controller = UserListContainerComponentController;
  static template = require("./users.container.html");
}
