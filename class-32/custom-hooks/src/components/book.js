import React, { useState } from 'react';
import useForm from '../hooks/form.js';

function Book(props) {
  // this.state.formData is the same thing as below
  // this.setState({ formData: this.state.formData }) is the same thing as setFormData
  const [formData, setFormData] = useState({}); // this is the Food component's internal state
  const [coolForm, setCoolForm] = useState({});
  const [handleSubmit, handleInput, handleChange, values] = useForm(read); // this is our own custom hook options, that will effect the state of this specific component

  function read(food) {
    setFormData(food);
  }

  return (
    <section className="form-container">
      <h3>Books Hooks!</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="book title" name="title" onChange={handleChange} />
        <input type="text" placeholder="book author" name="author" {...handleInput} />
        <textarea placeholder="description" name="description" onChange={handleChange}></textarea>
        <select name="booklist" onChange={handleChange}>
          <option>Fun</option>
          <option>Great</option>
          <option>Cool</option>
        </select>
        <button>Show the book!</button>
      </form>

      <div className="data-container">
        <p>This is being collected as we update the form (onChange of any input):</p>
        {
          Object.keys(values).map(key => <p key={Math.random()}>{key}: {values[key]}</p>)
        }

        <p>This is data that is collected after the form is submitted:</p>
        {
          Object.keys(formData).map(key => <p key={Math.random()}>{key}: {formData[key]}</p>)
        }     
      </div>
    </section>
  )
}

export default Book;