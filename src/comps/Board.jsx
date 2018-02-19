import React, { Component } from 'react';
import Note from './Note';
import noteData from '../data/notes.json';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: noteData.notes
    };
    this.eachNote = this.eachNote.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  // 作为props传递给子组件，用来接受子组件传递过来的newText
  update(newText, i) {
    console.log(`Update note #${i} with text: '${newText}'`);
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          return note.id === i ? { ...note, text: newText } : note;
        })
      }; // return
    });
  }

  // Handle remove note from notes
  remove(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id )
    }));
  }

  eachNote(note, i) {
    return (<Note key={i}
                  index={i}
                  id={note.id}
                  onChange={this.update}
                  onRemove={this.remove}>
                  {note.text}
            </Note>);
  }

  render() {
    return (<div className="board">{this.state.notes.map(this.eachNote)}</div>);
  }
}

export default Board;
