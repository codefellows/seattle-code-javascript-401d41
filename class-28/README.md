# Component Composition

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
- Compose components hierarchically
- Create logical wrapper components
- Create functional wrapper components
- Utilize `children` in composed components
  - Compose the `<List>, <If>` Component

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Component Composition - Logical

In this setup, you are sending your child components the raw data and allowing them to render the output as they decide.

```javascript

// Dashboard Wrapper
//  - feeds the SearchForm some methods
//  - then feeds the results some data

<Dashboard>
  <SearchForm handler={this.doTheSearch} />
  <Results data={this.state.results} />
</Dashboard>

// .. Results Component
<ul>
  {this.props.data.map( (item,i) => <li key={i}>{item}</li> );
</ul>

// Dashboard Component's render method:

render() {
  return props.children;
}

```

### Component Composition - Using Logic-less Children

This is typically used when your `children` are already in JSX form (pre-rendered) and you need to display them as a whole.  A good example might be a gallery of images

```javascript
  function getListings() {
    let listings = {this.state.results.map( (item,i) => <li key={i}>{item}</li> );
    this.setState({listings})
  }

  <SearchForm handler={this.doTheSearch} />
  <Results>
    { this.state.listings.map( listing => listing ) }
  </Results>

// Results Component

<ul>
  {this.props.children}
</ul>

```

### Component Lifecycle

- Mounting: These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
  - constructor()
  - static getDerivedStateFromProps()
  - render()
  - componentDidMount()
- Updating: An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()

### API Testing

Setup a mock server to simulate (intercept) calls to your APIs and return the results you want your tests to see

```javascript
import React from 'react'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})
```
