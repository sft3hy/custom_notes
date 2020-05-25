import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import './NoteCard.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const NoteCard = props => {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'contents':
                setContents(value);
                break;
            default:
                console.log("change not handled");
                break;
        }
    };

    const sumbitForm = () => {
        if (title && contents) {
            const submission = {
                'title': title,
                'contents': contents
            };
            props.handleAddNote(submission);
            setTitle('');
            setContents('');
        }
    };

    return (
        <Container>
            <h1 className="Title">Your custom notes app</h1>
            <InputGroup className="Note Title">
                <FormControl
                    className="Note Title"
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Note Title"
                    value={title}
                    onChange={handleChange}
                />
            </InputGroup>

            <InputGroup>
                <FormControl
                    className="Text"
                    type="text"
                    as="textarea"
                    rows="6"
                    name="contents"
                    placeholder="Note Text"
                    value={contents}
                    onChange={handleChange}
                />
            </InputGroup>

            <Button className="AddNote" variant="primary" onClick={sumbitForm}>
                Add Note
      </Button>
        </Container>
    );
};

export default NoteCard;