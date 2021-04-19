import { ILogService } from "angular";

class UserListContainerComponentController {

    ComponentName: string = "UserListContainerComponent"

    static $inject: string[] = ["$log"];
    constructor(
        private $log: ILogService
    ) { }

    $onInit(): void {
        this.$log.info(`[${this.ComponentName}] onInit`);
        
    }

}

const UserListContainerComponent: any = {
    selector: "user-list-container",
    controller: UserListContainerComponentController,
    template: "Hello world to user list "
};

export { UserListContainerComponent };