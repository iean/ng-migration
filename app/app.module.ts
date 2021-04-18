import * as angular from 'angular';

/**
 * Import Application Modules
 */
import { moduleName as coreModule } from './core/core.module';

export const moduleName =
  angular.module('application', [
    coreModule  ])
  .name;
