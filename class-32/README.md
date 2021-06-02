# Custom Hooks

## Learning Objectives

### Students will be able to

#### Describe and Define

- The structure of a custom hook.
- Describe use cases for custom hooks
- Find 3rd party custom hooks

#### Execute

- Understand, Use, Create Custom React Hooks
  - Form State
  - Fetching API Data
  - Realtime Connections
  - `useEffect()` usage with connections
  - Connect to a socket.io server
    - Subscribe to remote events
    - Emit events and data back to the server-

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

- What are custom hooks?
  - Extract duplicated logic from components
  - Share common functionality
    - But not state...
  - Take advantage of useEffect lifecycle

- Common use cases -- make things DRY!
  - Handle forms easily
  - Pre-fetch API data
  - Connect to services (like socket.io, Q, etc)

  > Unlike a React component, a custom Hook doesn't need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it's just like a normal function. Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it.

Following is a simple example that demonstrates proper wiring.

- Hooks are exported as a function, named as useXXX()
- Hooks return data or behaviors (functions) that are required to reuse their internal functionality
- Hooks are imported into components
- Components can re-use the hook functionality or data/state as needed
- Hooks do not render

  use-food-hook.js

  ```javascript
  export default function useFoodHook(hungry) {
    let food = 'cookies';
    return hungry ? food : null;
  }
  ```

  Using a hook is a simple, then, as requiring it and calling it.

  my-component.js

  ```javascript
  import useFeedme from 'use-food-hook.js';
  function myComponent() {
    const food = useFeedMe(true);
    return <div>{food}</div>
  }
  ```
