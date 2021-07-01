import React, { useState } from 'react';
import { Form, Card, Accordion } from "react-bootstrap"
import { ChevronRight, ChevronDown } from 'react-bootstrap-icons'
import '../style/style.css'

export default function CreatePost(props) {
    const [show0, setShow0] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [selectedFile, setSelectedFile1] = useState()
    function show(index) {
        switch (index) {
            case 0:
                setShow0(true)
                setShow1(false)
                setShow2(false)
                break;
            case 1:
                setShow0(false)
                setShow1(true)
                setShow2(false)
                break;
            case 2:
                setShow0(false)
                setShow1(false)
                setShow2(true)
                break;

        }

    }
    function onFileChange(event) {
        let select = event.target.files[0]
        setSelectedFile1(select);
        console.log(selectedFile);
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            selectedFile,
            selectedFile.name
        );

        // Details of the uploaded file


        // Request made to the backend api
        // Send formData object
        //axios.post("api/uploadfile", formData);
    }
    return (
        <>

            <div className="aside">
                <Accordion defaultActiveKey="0">
                    <Card className="cards">
                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => show(0)} className="buttonCards">
                            post setting {show0 ? <ChevronDown></ChevronDown> : <ChevronRight></ChevronRight>}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="image cover" onChange={(e) => onFileChange(e)} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="An Extra Pineaplle" />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="cards">
                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={() => show(1)} className="buttonCards">
                            Click me! {show1 ? <ChevronDown></ChevronDown> : <ChevronRight></ChevronRight>}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <div className="asideBottom"></div>
            </div>
        </>
    )
}