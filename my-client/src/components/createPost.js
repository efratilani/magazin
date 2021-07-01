import React, { useState } from 'react';
import { Button, Card, Accordion } from "react-bootstrap"
import { ChevronRight ,ChevronDown} from 'react-bootstrap-icons'
import '../style/style.css'

export default function CreatePost(props) {
    const [show0, setShow0] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
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
    return (
        <>

            <div className="aside">
                <Accordion defaultActiveKey="0">
                    <Card className="cards">
                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={()=>show(0)}>
                            Click me! {show0?<ChevronDown></ChevronDown>:<ChevronRight></ChevronRight>}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="cards">
                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={()=>show(1)}>
                            Click me! {show1?<ChevronDown></ChevronDown>:<ChevronRight></ChevronRight>}
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