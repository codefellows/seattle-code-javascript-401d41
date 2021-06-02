import React, { useState } from 'react';
import useForm from '../hooks/form.js';

function Food(props) {
  // this.state.formData is the same thing as below
  // this.setState({ formData: this.state.formData }) is the same thing as setFormData
  const [formData, setFormData] = useState({}); // this is the Food component's internal state
  const [coolForm, setCoolForm] = useState({});
  const [handleSubmit, handleInput, handleChange, values] = useForm(eat); // this is our own custom hook options, that will effect the state of this specific component

  function eat(food) {
    setFormData(food);
  }

  return (
    <section className="form-container">
      <h3>Food Hooks!</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="book" onChange={handleChange} />
        <input type="text" name="calories" {...handleInput} />
        <button>Eat the food!</button>
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

export default Food;