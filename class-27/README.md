# Props and State

Applications are comprised of many components, usually working together to perform a higher level task. As such, they'll all need access to state, methods to read/modify state, and an ability to respond to triggered actions in other, related components. Today, we'll explore how React applications do this, using JSX attributes, better known as `props`

## Learning Objectives

### Students will be able to

#### Describe and Define

- Functions as properties/attributes
- State (or parts of state) as properties/attributes

#### Execute

- Pass props from a container component to a child
- Execute methods in a parent component from a child
- Manage state from events
- Handle form input

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

## Forms and Inputs

React form elements maintain internal state. Think of React inputs as stateful child components. This means that we must manage the state of inputs through our own stateful component and one way data binding. The creation of a parent component (which we'll refer to as _form-container_), manages the state for all child components of the form and passes any necessary state down into it's inputs through the use of `props`. Each input has an `onChange` event that we can handle and use to update our _form-container's_ state each time the user interacts with an input.

### Props

Components accept arbitrary inputs called `props`. In JSX, props are passed into a component with a syntax that looks like HTML attributes. These are the equivalent of function params.

In actuality, `props` is the name of the object passed into a component constructor and any prop added to a component in the JSX will be accessible as a property on `props`.

After `props` is passed into the constructors `super` function, they are available on the context by using `this.props`.

#### Props Example ... the way we get to use them

``` javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

#### Props -- what's actually happening under the hood

```javascript

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

```

#### Props can be data or functions

In javascript, we can pass functions around like variables. We've been doing this all along (named callback functions in express and jQuery for example).  Now we get to really harness that power!

When this renders ...

- Foo will draw Bar
- Bar will draw a button
- When that button gets clicked, it's `onClick` action fires
  - That action runs the method `this.props.handleClick`
  - That method runs in `<Foo>` ... `<Foo>` passed it down to `<Bar>` essentially telling it what it wants it to do.
- This is a means of passing not only **Data** but **Behavior** down the component tree

``` javascript

class Foo extends React.Component {
  constructor(props){
    super(props)
  }

  screamLoud() {
    console.log("OUCH");
  }

  render(){
    return (
      <div>
        <Bar text="Click Me!" handleClick={this.screamLoud} />
      </div>
    )
  }
}

class Bar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    <div>
      <button onClick={this.props.handleClick}>{props.text}</button>
    </div>
  }

}

// Render the element ...
<Foo />

// Outputs:

<button>Click Me!</button>
```

### One Way Data flow

State can only be passed from parent component to a child component through the use of `props`. This enforces the idea of one way data flow. One way data flow is a way of describing that state can only be passed down the component tree (not up). If a child wants to pass some data to a parent, the parent can pass a function to the child through `props` and the child may invoke that function and pass it data for the parent to manage.

## Deployment - GitHub Pages

1. Add `gh-pages` as a dependency for your application
1. Add 2 scripts to your package.json:

   ```json
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
   ```

1. Create a GitHub Workflow for React, using the template provided
1. Create a GitHub Personal Token and add that as a secret for the repository.
   - This is going to be useful for other projects as well.

## Testing - React Testing Library - Basics

Test your application as you expect a user to use it. These are "acceptance" tests, not unit tests!

1. Render your application (or a single component)
1. Use the RTL "getBy" or "findBy" selectors to identify elements
1. Use `fireEvent` to simulate clicks, typing, submission of forms
1. Assert on the results you expect to *SEE*

```javascript
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../app-number.js'

test('dynamically updates number', async () => {
  render(<App />);
  const input = screen.getByTestId('num');
  const h1 = screen.getByTestId('output');
  fireEvent.change(input, { target: { value: 1234 } });
  expect(h1).toHaveTextContent('1234')
})
```
