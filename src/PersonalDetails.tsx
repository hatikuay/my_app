import React, { FC, useEffect, useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { StringOrNull, IPersonState, IProps } from './Types';
import FormValidation from './FormValidation';

const PersonalDetails: FC<IProps> = ({ DefaultState }: IProps) => {

    const [Person, setPerson] = useState<IPersonState>(DefaultState);
    const [canSave, setCanSave] = useState(true);

    const onChangePerson = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setPerson((person: IPersonState) => ({ ...person, [name]: value }));
    }

    const userCanSave = (hasErrors: boolean) => {
        setCanSave((canSave) => canSave = hasErrors);
    }

    return (
        <Row>
            <Col lg="8">
                <Row>
                    <Col><h4 className="mb-3">Personal details</h4></Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col><label htmlFor="firstName">First name</label></Col>
                            <Col><label htmlFor="lastName">Last name</label></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col><input type="text" id="firstName" className="form-control" value={Person.FirstName} onChange={onChangePerson} name="FirstName" placeholder="First name" /></Col>
                            <Col><input type="text" id="lastName" className="form-control" value={Person.LastName} onChange={onChangePerson} name="LastName" placeholder="Last name" /></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><label htmlFor="addr1">Address line 1</label></Col>
                </Row>
                <Row>
                    <Col><input type="text" id="addr1" className="form-control" placeholder="Address line 1" name="Address1" value={Person.Address1} onChange={onChangePerson} /></Col>
                </Row>
                <Row>
                    <Col><label htmlFor="addr2">Address line 2</label></Col>
                </Row>
                <Row>
                    <Col><input type="text" id="addr2" className="form-control" placeholder="Address line 2" name="Address2" value={Person.Address2!} onChange={onChangePerson} /></Col>
                </Row>
                <Row>
                    <Col><label htmlFor="town">Town</label></Col>
                </Row>
                <Row>
                    <Col><input type="text" id="town" className="form-control" placeholder="Town" name="Town" value={Person.Town} onChange={onChangePerson} /></Col>
                </Row>
                <Row>
                    <Col><label htmlFor="county">Country</label></Col>
                </Row>
                <Row>
                    <Col><input type="text" id="county" className="form-control" placeholder="Country" name="Country" value={Person.Country} onChange={onChangePerson} /></Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col lg="3"><label htmlFor="postcode">Postal/ZipCode</label></Col>
                            <Col lg="4"><label htmlFor="phoneNumber">Phone number</label></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col lg="3"><input type="text" id="postcode" className="form-control" name="Postcode" value={Person.Postcode} onChange={onChangePerson} /></Col>
                            <Col lg="4"><input type="text" id="phoneNumber" className="form-control" name="PhoneNumber" value={Person.PhoneNumber} onChange={onChangePerson} /></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><label htmlFor="dateOfBirth">Date of birth</label></Col>
                </Row>
                <Row>
                    <Col><input type="date" id="dateOfBirth" name="DateOfBirth" value={Person.DateOfBirth!} onChange={onChangePerson} /></Col>
                </Row>
                <Row>
                    <Col>
                        <Button size="lg" color="primary" >Save</Button>
                    </Col>
                    <Col>
                        <Button size="lg" color="secondary" >Clear</Button>
                    </Col>
                </Row>
                <Row>{<FormValidation CurrentState={Person} CanSave={userCanSave} />}</Row>
            </Col>
            <Col>
                <Col>
                    <Row>
                        <Col>{/*people}*/}</Col>
                    </Row>
                    <Row>
                        <Col lg="6"><Button size="lg" color="success">Load</Button></Col>
                        <Col lg="6"><Button size="lg" color="info">New Person</Button></Col>
                    </Row>
                </Col>
            </Col>
        </Row>
    );
}

export default PersonalDetails
