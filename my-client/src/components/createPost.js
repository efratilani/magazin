import React, { useState } from 'react';
import { Button,Card,Accordion } from "react-bootstrap"
import {ChevronRight} from 'react-bootstrap-icons'
import '../style/style.css'

export default function CreatePost(props) {
    const [show0,setSh]=useState(false)
function h()
{
    alert()
}
    return (
        <>

            <div className="aside">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={h}>
                        Click me! {<ChevronRight></ChevronRight>}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Click me! {<ChevronRight></ChevronRight>}
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