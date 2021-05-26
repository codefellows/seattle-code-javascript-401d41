import React from 'react';

const render = (condition = false, children = null) => {
  return condition ? children : null;
}

// do not read into this and get yourself into a "wtf" is React.Children // cloneElement hole
export const If = props => {
  return React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { condition: props.condition });
  })
}

export const Then = props => render(props.condition, props.children);
export const Else = props => render(!props.condition, props.children);
export const When = props => render(props.condition, props.children); 
export const Unless = props => render(!props.condition, props.children);