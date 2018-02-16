import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
// If you are not using es6 compiler like babel or rollup.js, it's possible to include icons from the compiled folder ./lib.

class Note extends Component {
  constructor(props){
    super(props)
    this.state ={
      editing: false
    }
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
  }

  edit(){
    console.log(`Edit - state.editing: ${this.state.editing}`);
    this.setState({
      editing: true
    })
  }

  save(){
    console.log("Save Note");
    this.setState({
      editing: false
    })
  }
  remove(){
    console.log("Edit Note");
  }

  renderForm(){
    return(
      <div className="note-container">
        <div className="note">
          <form>
            <textarea />
          </form>
          <span className="buttons">
            <button onClick={this.save} id="edit">
                <FaFloppyO />
            </button>
          </span>
        </div>
      </div>
    )
  }

  renderDisplay() {
    return (
      <div className="note-container">
        <div className="note">
          <span>
            <p>My Note</p>
          </span>
          <span className="buttons">
            <button onClick={this.edit} id="edit">
                <FaPencil />
            </button>
            <button onClick={this.remove} id="remove">
                <FaTrash />
            </button>
          </span>
        </div>
      </div>
    );
  }

  render(){
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }

}

export default Note;
