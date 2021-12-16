import React, { useState } from 'react';
import { ActionGroup, Button, Form, FormGroup, TextInput } from '@patternfly/react-core';
import { Grid, GridItem } from '@patternfly/react-core';
import axios from "axios";

export function PostBlog() {

    const [formState, setFormState] = useState({ author: "", name: "" });

    function authorchanged(value) {
        setFormState({ ...formState, author: value })
    }

    function contentchanged(value) {
        setFormState({ ...formState, name: value })
    }

    function submitForm() {
        axios.post('http://localhost:8080/Blog/blog', formState).then(function (response) {
            // handle success
            console.log(response.data);
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
            .then(function () {
                // always executed
            });

    }

    return (
        <div className="App">
            <Grid>
                <GridItem span={8}> <h1>Post Blog</h1>
                    <Form>
                        <FormGroup
                            label="Author"
                            type="text"
                            // helperText={helperText}
                            fieldId="author"
                        >
                            <TextInput
                                // value={value}
                                id="author"
                                onChange={authorchanged}
                            />
                        </FormGroup>
                        <FormGroup
                            label="Name"
                            type="text"
                            // helperText={helperText}
                            fieldId="Name"
                        >
                            <TextInput
                                // value={value}
                                id="Name"
                                onChange={contentchanged}
                            // onChange={this.handleTextInputChange}
                            />
                            <ActionGroup>
                                <Button variant="primary" onClick={submitForm}>Submit</Button>
                            </ActionGroup>
                        </FormGroup>
                    </Form></GridItem>
            </Grid>

        </div>
    );
}