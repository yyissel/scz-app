import React, { Component } from "react";
import "./ResearcherSetup.css";

import { Button, Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
export default class ResearcherSetup extends Component {
    render() {
        return (
            <div className="ResearcherSetup">
                <Form>

                    <FormGroup controlId="formFirstName">
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl type="text" placeholder="ex: John" />

                    <FormGroup controlId="formLastName">
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl type="text" placeholder="ex: Smith" />
                    </FormGroup>

                    <FormGroup controlId="formProjectName">
                        <ControlLabel>Project Name</ControlLabel>
                        <FormControl type="text" placeholder="ex: Study on Bees" />
                    </FormGroup>
                    </FormGroup>

                    <FormGroup controlId="formProjectName">
                        <ControlLabel>Project Name</ControlLabel>
                        <FormControl type="text" placeholder="ex: Study on Bees" />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        );
    }
}
