import React from 'react';
import { useState } from 'react';

function Age(props) {
  const [age, setAge] = useState(props.age || 0);

  return (
    <div>Your age: {age}</div>
  )
}

export default Age;