import DevExpress from 'devextreme';
import { List } from 'immutable';
import { IUser } from './../../../models/user.model';
import './user-list.component.scss';

class UserListController {

    /**
     * binding list of users as input to the component
     */
     users : Array<IUser>;
     
    /**
     * user removed output event to be fired 
     */
    userRemoved: ( $event : {
        $event: {
            user: IUser;
        };
    }) => void;

    /**
     * user edit output event
     *
     */
    userEdited: ($event: {
        $event: {
          user: IUser;
        };
      }) => void;



    /**
     * component initialization method
     */
    $onInit(): void {
        console.log('initiating user list child component');
        console.log('initiating data'+ JSON.stringify(this.users));
    }

    $onChanges(changesObj: any) {
        console.log(changesObj);
    }
    


    /**
     *
     * @param user to be removed
     */
    removeUser( user : IUser) {
        /**
         * Fire remove user event to parent
         */
        this.userRemoved({
            $event:{
                user:user
            }
        });
    }

    editUser(user : IUser){
        /**
         * fire user edit method to parent
         */
        this.userEdited({
            $event:{
                user: user
            }
        });
    }
    checkUsers(){
       console.log(this.users); 
    }

    capitalize = function(text:string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    showMessage(e:any) {
        var mode = e.component.option("stylingMode");    };

}

export class UserList implements angular.IComponentOptions{
    static selector = 'userList';
    /**
     * bind input values and output events
     *
     */
    static bindings = {
        users : '<',
        userRemoved: '&',
        userEdited : '&'
    };
    static controller = UserListController;
    static template = require('./user-list.component.html');
}
