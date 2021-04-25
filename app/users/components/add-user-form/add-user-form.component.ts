import { DefaultUser, IUser } from './../../../models/user.model';


class AddUserFormController {
  firstName: string;
  sirName: string;

  userAdded: ($event: {
    $event: {
      user: IUser;
    };
  }) => void;

  
  saveUser() {
    //#region PrepareUserObject
    let user = new DefaultUser();
    user.firstName = this.firstName;
    user.sirName = this.sirName;
    user.isActive = true;

    //#endregion

    console.log(JSON.stringify(user));

    // fire event to container component
    this.userAdded({
      $event: {
        user: user,
      },
    });
  }
}
export class AddUserFormComponent implements angular.IComponentOptions {
  static selector = 'addUserForm';
  static template = require('./add-user-form.component.html');
  static bindings = {
    userAdded: '&',
  };
  static controller = AddUserFormController;
}
