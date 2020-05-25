import React from 'react';

import Container from 'react-bootstrap/Container';
import './PreviousNotes.css';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PrevNotes = props => {
    const { notes, removeNote } = props;

    return (
        <Container>
            <h2 className="YourNotes">Your Notes</h2>
            <hr />
            <CardDeck>
                <OldNotes notes={notes} removeNote={removeNote} />
            </CardDeck>
        </Container>
    );
};

const OldNotes = props => {
    const rows = props.notes.map(
        (row, index) => {
            return (
                <Card className="DeleteNoteButton">
                    <Card.Header as="h4">
                        <span>{row.title}</span>
                        <Button className="DeleteNoteButton" onClick={() => props.removeNote(index)} variant="outline-danger">
                            Delete note
            </Button>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {row.contents}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        }
    );
    return <div>{rows}</div>;
};

export default PrevNotes;