import { StringOrNull } from './Types';
import { IPersonState } from "./State";

interface IValidator<T> {
    IsValid(input: T): boolean;
}

export class MinLengthValidator implements IValidator<StringOrNull> {
    private minLength: number;
    constructor(minLength: number) {
        this.minLength = minLength;
    }
    public IsValid(input: StringOrNull): boolean {
        if (!input) {
            return false;
        }
        return input.length >= this.minLength;
    }
}

export class RegularExpressionValidator implements IValidator<StringOrNull>{
    private regex: RegExp;
    constructor(expression: string) {
        this.regex = new RegExp(expression);
    }
    public IsValid(input: StringOrNull): boolean {
        if (!input) {
            return false;
        }
        return this.regex.test(input);
    }
}

export interface IValidation {
    Validate(state: IPersonState, errors: string[]): void;
}

export class AddressValidation implements IValidation {
    private readonly minLengthValidator: MinLengthValidator = new MinLengthValidator(5);
    private readonly zipCodeValidator: RegularExpressionValidator = new RegularExpressionValidator("^[0-9]{5}(?:-[0-9]{4})?$");
    public Validate(state: IPersonState, errors: string[]): void {
        if (!this.minLengthValidator.IsValid(state.Address1)) {
            errors.push("Address line 1 must be greater than 5 characters");
        }
        if (!this.minLengthValidator.IsValid(state.Town)) {
            errors.push("Town must be greater than 5 characters");
        }
        if (!this.minLengthValidator.IsValid(state.Country)) {
            errors.push("County must be greater than 5 characters");
        }
        if (!this.zipCodeValidator.IsValid(state.Postcode)) {
            errors.push("The postal/zip code is invalid");
        }
    }
}


export class PersonValidation implements IValidation {
    private readonly firstNameValidator: MinLengthValidator = new MinLengthValidator(1);
    private readonly lastNameValidator: MinLengthValidator = new MinLengthValidator(2);
    public Validate(state: IPersonState, errors: string[]): void {
        if (!this.firstNameValidator.IsValid(state.FirstName)) {
            errors.push("The first name is a minimum of 1 character");
        }
        if (!this.lastNameValidator.IsValid(state.LastName)) {
            errors.push("The last name is a minimum of 2 characters");
        }
    }
}

export class PhoneValidation implements IValidation {
    private readonly regexValidator: RegularExpressionValidator = new RegularExpressionValidator(`^(?:\\((?:[0-9]{3})\\)|(?:[0-9]{3}))[-.]?(?:[0-9]{3})[-. ]?(?:[0-9]{4})$`);
    private readonly minLengthValidator: MinLengthValidator = new MinLengthValidator(1);
    public Validate(state: IPersonState, errors: string[]): void {
        if (!this.minLengthValidator.IsValid(state.PhoneNumber)) {
            errors.push("You must enter a phone number")
        } else if (!this.regexValidator.IsValid(state.PhoneNumber)) {
            errors.push("The phone number format is invalid");
        }
    }
}