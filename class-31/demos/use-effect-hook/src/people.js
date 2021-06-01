import React, { useEffect, useState } from 'react';

function People(props) {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');

  const _changeName = (e) => {
    setName(e.target.value);
  }

  const _addPerson = (e) => {
    e.preventDefault();
    e.target.reset(); // this just resets inputs in a form
    name && setPeople([...people, name]);
  }

  // this will run on every re-render / stateful action update
  useEffect(() => {
    console.log('i run on every re-render of my app lifecycle');
  })

  // only runs when name is updated
  useEffect(() => {
    console.log('name changed to:', name);
  }, [name]);

  // only runs when name is updated
  useEffect(() => {
    // document.title being updated in the lifecycle, using useEffect, is considered a "side effect"
    console.log('this updates only when i add a person');
    if (people.length >= 1) { document.title = `Welcome, ${name}!`};
  }, [people]);

  // on initial mount of component
  useEffect(() => {
    console.log('this will run on initial mounting of our component');
  }, [])

  return (
    <section>
      <form onSubmit={_addPerson}>
        <input onChange={_changeName} />
      </form>

      {
        people.map(person => {
          return <p key={person}>{person}</p>
        })
      }
    </section>
  )
}

export default People;