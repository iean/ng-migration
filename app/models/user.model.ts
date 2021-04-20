import { GetUniqueId } from '../core/helpers/model.helper';

/**
 * User Interface to track use data
 */
export interface IUser{
    id: number;
    firstName: String;
    sirName: String;
    isActive: boolean;
}

/**
 * Default Class Implementation of an UserObject
 * Generates an unique Id on object creation
 * Makes the entity Active by default by setting isActive to true
 */
export class DefaultUser implements IUser {
    id: number;
    firstName: String;
    sirName: String;
    isActive: boolean;

    /**
     *
     */
    constructor() {
        this.id = GetUniqueId();
        this.isActive = true;
    }
}
