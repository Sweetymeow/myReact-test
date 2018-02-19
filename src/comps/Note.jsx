import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
// If you are not using es6 compiler like babel or rollup.js,

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    // interactive function
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
  }

  edit() {
    console.log(`Edit - state.editing: ${this.state.editing}`);
    // this._newText.focus();
    this.setState({
      editing: true
    });
  }

  // Editing Mode: Handle "save" button
  save(e) {
    // this.setState({
    //   editing: false,
    //   text: this._newText.value
    // })
    e.preventDefault();
    // call update(newText, i) from Board
    this.props.onChange(this._newText.value, this.props.id);
    this.setState({
      editing: false
    });
  }

  remove() {
    this.props.onRemove(this.props.id);
  }

  // note in edit mode(save button)
  renderForm() {
    return (
    <div className="note-container">
      <div className="note">
        <form onSubmit={this.save}>
          <textarea ref={ (input) => this._newText = input } />
          <span className="buttons">
            {/* <button onClick={this.save} id="edit"><FaFloppyO /></button> */}
            <button> <FaFloppyO /></button>
          </span>
        </form>
      </div>
    </div>);
  }

  // note in display mode(edit & remove button)
  renderDisplay() {
    return (<div className="note">
      <span>
        <p>{this.props.children}</p>
      </span>
      <span className="buttons">
        <button onClick={this.edit} id="edit"> <FaPencil /></button>
        <button onClick={this.remove} id="remove"> <FaTrash /></button>
      </span>
    </div>);
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

Note.propTypes = {
  children: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.number,
  onChange: PropTypes.func,
  onRemove: PropTypes.func
};

export default Note;
