# Express REST API

Express servers can quickly get big and out of control if you build them in one monolithic server file. There are many strategies for breaking the route handling logic into modules that "make sense" ... we'll be introducing the you to one such pattern today -- separate routers that contain all of the routing logic and handlers using `Express.router()`. In 301, we kept the route definitions in the server and imported the handler functions from other modules. There is more than one way to do it, and your applications can be seen through many lenses.

## Learning Objectives

### Students will be able to

#### Describe and Define

- External (modular) routing with Express

#### Execute

- Build a REST API server using Express
- Use models and schemas to perform CRUD operations
- Respond to request Queries and Parameters in routes

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### CRUD Operations with REST and Express

- CREATE
  - `app.post('/resource')`
- READ
  - `app.get('/resource')`
- UPDATE
  - `app.put('/resource/:id')`
- DESTROY
  - `app.get('/resource/:id')`

### Route Modules

- Normal node modules
- Require express just like your server
- Instantiate `express.router` instead of `express()`
- Export the route definitions
- The main server/app should require your route an then `use()` them
  - The server can prefix imported routes

#### Router

```javascript
const express = require('express');

const router = express.Router();

router.get('/mystuff', (req,res) => {
  const out = {
    fromParam: req.params.color,
    fromReq: req.color,
  };
  res.send(out);
});

module.exports = router;
```

#### Server

```javascript
const express = require('express');
const app = express();

// Bring in your custom routes
const customRoutes = require('./routes.js');

// Integrate them into (use them) in the app
app.use(customRoutes);
```

### Route Prefixes

When you `use()` a router, you can prefix all of it's routes from the server.  In this example, we've prefixed the custom routes module with **/custom**, which means that calls to <http://servername.com/mystuff> will no longer work as before. You'll now have to use <http://servername.com/custom/mystuff>

```javascript
const express = require('express');
const app = express();

const customRoutes = require('./routes.js');

// now, routes in the routes file will only work if /custom is in front of them.
app.use('/custom', customRoutes);

```

### Classes

Javascript Classes let you easily define an object's properties and methods in a self contained code block.

```javascript
class Car {

  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  drive() {
    this.isMoving = true;
  }

  stop() {
    this.isMoving = false;
  }
}

const myCar = new Car('Chevrolet', 'Camaro', 'red');
myCar.drive();
myCar.stop();
```
