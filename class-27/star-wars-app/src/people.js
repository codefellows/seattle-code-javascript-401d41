import React from 'react';

const People = (props) => {
  return (
    <section className="people">
      <ul>
        {Object.keys(props.people).map((item, idx) => {
          return (
            <li key={idx}>
              <a href={props.people[item]}>{item}</a>
            </li>
          );
        })}
      </ul>
    </section>
  )
}

export default People;