import * as angular from 'angular';
/**
 * Import Application Modules
 */
import { moduleName as coreModule } from './core/core.module';
import {moduleName as usersModule} from './users/users.module';


//'dx'
export const moduleName =
  angular.module('application', [
    coreModule,usersModule])
  .name;
