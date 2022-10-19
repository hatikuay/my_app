import { StringOrNull } from './Types';

export interface IPersonState {
    FirstName: string,
    LastName: string,
    Address1: string,
    Address2: StringOrNull,
    Town: string,
    Country: string,
    PhoneNumber: string;
    Postcode: string,
    DateOfBirth: StringOrNull,
    PersonId: string
}

export interface IProps {
    DefaultState: IPersonState
}

export interface IValidationProps {
    CurrentState: IPersonState;
    CanSave: (canSave: boolean) => void;
}
