import React, { FC, useState } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import PersonalDetails from './PersonalDetails';
import { IPersonState } from './Types';

const initialPerson: IPersonState = {
  Address1: "",
  Address2: null, 
  Country: "",
  DateOfBirth: new Date().toISOString().substring(0, 10), 
  FirstName: "",
  LastName: "",
  PersonId: "", 
  PhoneNumber: "", 
  Postcode: "",
  Town: "",
}

const App: FC = () => {
  const [defaultPerson, setDefaultPerson] = useState<IPersonState>(initialPerson);
  return (
    <Container>
      <PersonalDetails DefaultState={defaultPerson} />
    </Container>
  );
}

export default App;
