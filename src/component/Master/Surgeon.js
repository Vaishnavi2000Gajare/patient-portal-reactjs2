// import React from 'react';
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import data from "./mock-data.json";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import Header from "../Auth/Header";
import Footer from "../Auth/Footer";


    const marginTop = {
        marginTop: '50px'
      }
      
      const textCenter = {
        textAlign: 'center'
      }
    // const row = {
    //     marginBottom: '33px'
    // }
  
      
      
      
       export const Surgeon = () => {
        const [contacts, setContacts] = useState(data);
        const [addFormData, setAddFormData] = useState({
          surgeonId: "",
          surgeonName: "",
          surgeonType: "",
          nurseName: "",
          patientId:""
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
            surgeonId: addFormData.surgeonId,
            surgeonName: addFormData.surgeonName,
            surgeonType: addFormData.surgeonType,
            nurseName: addFormData.nurseName,
            patientId: addFormData.patientId,
          };
          const newContacts = [...contacts, newContact];
          console.log(newContacts)
          setContacts(newContacts);
        };
         
  return (
    <div>
       
    <Header />
    <Container>
    <div style={marginTop}>
      <h4>Surgeon Details</h4>
      <Row>
        {/* <Col md={{ span: 6, offset: 3 }}> */}
          <div>
            <Card>
              <Card.Body>
              <Card.Title>Add Surgeon Details</Card.Title>
                <Form onSubmit={handleAddFormSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Surgeon ID</Form.Label>
                      <Form.Control type="number" name="surgeonId" required="required" placeholder="Enter Surgeon ID" onChange={handleAddFormChange} />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Surgeon Name</Form.Label>
                      <Form.Control type="text" name="surgeonName" required="required" placeholder="Enter Surgeon Name" onChange={handleAddFormChange}/>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Surgeon Type</Form.Label>
                      <Form.Control type="text" name="surgeonType" required="required" placeholder="Enter Surgeon Type" onChange={handleAddFormChange} />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Nurse Name</Form.Label>
                      <Form.Control type="text" name="nurseName" required="required" placeholder="Enter Nusre Name" onChange={handleAddFormChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Form.Label>Patient ID</Form.Label>
                    <Form.Control type="number" name="patientId" required="required" placeholder="Enter Patient ID" onChange={handleAddFormChange} />
                  </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} style={textCenter}>
                      <Button type="submit" size="sm">Add Surgeon Details</Button>
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </div>
        {/* </Col> */}
      </Row>
      <div className="patient-container" style={{marginTop:'50px'}}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Surgeon ID</th>
              <th>Surgeon Name</th>
              <th>Surgeon Type</th>
              <th>Nurse Name</th>
              <th>Patient ID</th>
            </tr>
          </thead>
          <tbody style={{backgroundColor:"red"}}>
            {contacts.map((element) => (
              <tr>
                <td>{element.surgeonId}</td>
                <td>{element.surgeonName}</td>
                <td>{element.surgeonType}</td>
                <td>{element.nurseName}</td>
                <td>{element.patientId}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    </Container>
  
  );
  <Footer/>
    </div>
   
  );
}

























