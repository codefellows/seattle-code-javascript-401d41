# Routing

Apps written using a component framework such as React are generally composed of many components, assembled hierarchically to create a cohesive application. Components very often need to share state(data) and behaviors (methods). In addition to props and state, components can actually render other components as their children.

## Learning Objectives

### Students will be able to

#### Describe and Define

- `props.children`
- Composition vs Iteration
- Routing to swap content
- Routing to change page

#### Execute

- Implement React Routing via `<BrowserRouter />`
  - Page Level
  - Component Swapping

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### BrowserRouter

What is a route? It begins as a URL with some path:

- An "about" route: `http://yourdomain.com/about`
- A "contact" route: `http://yourdomain.com/contact`

Given that path, we'll want to show different content. In a traditional website, that means a different HTML page. In React, it means rendering a different component.

#### Wiring: The application

Begin by wrapping your application in an instance of BrowserRouter. This will enable all of your components to link to routes and to conditionally render based on the route

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app.js';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

...
```

#### Wiring: Linking to different "routes"

`import { Route } from 'react-router-dom';`

To use Browser Router properly, you eliminate your use of `<a>` tags and instead use it's built-in `<Link>` component.

```javascript
<Link to="/">Home</Link>
<Link to="/stuff">Stuff</Link>
```

#### Wiring: Showing the right component based on the /route

In practice, then, use the router component anywhere you like to look at either `/about` or `/contact` in the URL and based on that, displaying either the `About` or the `Contact` component

```javascript
 <Route exact path="/about" component={About} />
 <Route exact path="/contact" render={() => <Contact>{items}</Contact>} />
```

### Testing Note - Queries

- [React Testing Library Queries](https://testing-library.com/docs/dom-testing-library/api-queries)
- [Aria Roles](https://www.w3.org/TR/html-aria/)

Have you noticed that RTL Makes it very hard/impossible to target elements by ID or Class. Why?

They are trying to force you down a visual road (by evaluating text) or more explicitly, to use Accessibility structure, such as **aria roles** and **labels**

As you change your JSX to make your tests work, you'll find that your HTML is naturally more semantic and accessible
