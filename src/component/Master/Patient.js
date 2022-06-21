import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import data from "./mock-data.json";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'

import Header from "../Auth/Header";
import Footer from "../Auth/Footer";
import '../patient.css';

const marginTop = {
  marginTop: '50px'
}

const textCenter = {
  textAlign: 'center'
}


 export const Patient = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      patientId: "",
      patientName: "",
      patientPhoneNumber: "",
      patientEmailID: "",
    });
    
    const handleAddFormChange = (event) => {
      event.preventDefault();
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
      console.log(newFormData);
      setAddFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        patientId: addFormData.patientId,
        patientName: addFormData.patientName,
        patientPhoneNumber: addFormData.patientPhoneNumber,
        patientEmailID: addFormData.patientEmailID,
      };
      const newContacts = [...contacts, newContact];
      console.log(newContacts)
      setContacts(newContacts);
    };



  return (
    <>
    <Header />  
    <Container>
    <div style={marginTop}>
      <h4>Patient Details</h4>
      <Row>
        {/* <Col md={{ span: 6, offset: 3 }}> */}
          <div>
            <Card>
              <Card.Body>
              <Card.Title >Add Patient Details</Card.Title>
                <Form onSubmit={handleAddFormSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Patient ID</Form.Label>
                      <Form.Control type="number" name="patientId" required="required" placeholder="Enter Patient ID" onChange={handleAddFormChange} />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Patient Name</Form.Label>
                      <Form.Control type="text" name="patientName" required="required" placeholder="Enter Patient Name" onChange={handleAddFormChange}/>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Patient Mobile Number</Form.Label>
                      <Form.Control type="number" name="patientPhoneNumber" required="required" placeholder="Enter Patient Mobile Number" onChange={handleAddFormChange} />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Patient Email ID</Form.Label>
                      <Form.Control type="email" name="patientEmailID" required="required" placeholder="Enter Patient Email ID" onChange={handleAddFormChange} />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} style={textCenter}>
                      <Button type="submit" size="sm">Add Patient Details</Button>
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </div>
        {/* </Col> */}
      </Row>
      <div className="patient-container" style={{marginTop:'50px'
    }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr >
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Patient Phone Number</th>
              <th>Patient Email ID</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((element) => (
              <tr>
                <td>{element.patientId}</td>
                <td>{element.patientName}</td>
                <td>{element.patientPhoneNumber}</td>
                <td>{element.patientEmailID}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    </Container>
    <Footer/>
    </>
  );
};


