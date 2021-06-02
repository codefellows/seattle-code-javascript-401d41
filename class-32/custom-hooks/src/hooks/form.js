import { useState } from 'react';

// our custom hook has the "use" convention attached -> you MUST stick to this
const useForm = (action) => {

  // setup some ability to collect values from our form as it's being updated / submitted
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    action(values);
  }

  const handleChange = (e) => {
    setValues(values => ({...values, [e.target.name]: e.target.value }));
  }

  // handleInput is just another implementation of handleChange, which we could add other methods to now
  // it will be used in a different manor than the above when we actually use it
  const handleInput = {
    onChange: (e) => {
      setValues(values => ({...values, [e.target.name]: e.target.value }));
    }
  }

  return [
    handleSubmit,
    handleInput,
    handleChange,
    values
  ]
}

export default useForm;