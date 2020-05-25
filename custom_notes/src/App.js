import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import PrevNotes from './PreviousNotes.js';
import NoteCard from './NoteCard.js';


class App extends Component {
  state = {
    notes: []
  };

  removeNote = index => {
    const { notes } = this.state;
    this.setState({
      notes: notes.filter(
        (row, rowIndex) => {
          return rowIndex !== index;
        }
      )
    });
  };

  handleAddNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    });
  };

  render() {
    const { notes } = this.state;

    return (
      <div>
        <NoteCard handleAddNote={this.handleAddNote} />
        <PrevNotes notes={notes} removeNote={this.removeNote} />
      </div>
    );
  }
}

export default App;