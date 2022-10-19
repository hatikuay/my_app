export const PERSON_TYPE = "PERSON_TYPE";

export interface IPersonState {
    FirstName: string,
    LastName: string,
    Address1: string,
    Address2?: String,
    Town: string,
    Country: string,
    PhoneNumber: string;
    Postcode: string,
    DateOfBirth?: String,
    PersonId: string
}

export interface IPersonAction {
    type: string;
    payload: IPersonState | null;
}

export const PersonReducer = (state: IPersonState | null = null, action: IPersonAction): IPersonState | null => {
    switch (action.type) {
        case PERSON_TYPE:
            console.log("Person Reducer", action.payload);
            return action.payload;
        default:
            return state;
    }
};



