import { ILogService } from "angular";

class AddUserContainerComponentController {

    ComponentName: string = "AddUserContainerComponent"

    static $inject: string[] = ["$log"];
    constructor(
        private $log: ILogService
    ) { }

    $onInit(): void {
        this.$log.info(`[${this.ComponentName}] onInit`);
        
    }

}

const AddUserContainerComponent: any = {
    selector: "add-user-container",
    controller: AddUserContainerComponentController,
    template: "hello world add"
};

export { AddUserContainerComponent };