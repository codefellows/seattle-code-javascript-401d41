# LAB: Socket.io

**CAPS Phase 2:** Continue working on a multi-day build of our delivery tracking system, moving event management to socket.io

In this phase, we'll be moving away from using TCP for our event network and switching instead in to using socket.io, which takes on some of the complexity we had to manage ourselves, and also works equally well between servers and with websites.

The intent here is to build the data services that would drive full dashboard where we can see pickups and deliveries as they happen.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'socket.io' and continue to work in your 'caps' repository.

## Business Requirements

Refer to the [CAPS System Overview](../../apps-and-libraries/caps/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 2 Requirements

In Phase 2, we'll be changing the underlying networking implementation of our CAPS system from using node events to using a library called socket.io so that we can do networked events.  Socket.io manages the connection pool for us, makes broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

The core functionality we've already built remains the same. The difference in this phase is that we'll be creating a networking layer. As such, the user stories that speak to application functionality remain unchanged, but a new set theme emerges to get us through the refactoring.

- As a vendor, I want to alert the system when I have a package to be picked up
- As a driver, I want to be notified when there is a package to be delivered
- As a driver, I want to alert the system when I have picked up a package and it is in transit
- As a driver, I want to alert the system when a package has been delivered
- As a vendor, I want to be notified when my package has been delivered

And as developers, here are some of the development stories that are relevant to the above

- **As a developer, I want to create network event driven system using Socket.io so that I can write code that responds to events originating from both servers and web applications**

## Technical Requirements / Notes

In order to switch from TCP to Socket.io, the refactoring process will involve changes to each application to use the core features of Socket.io

Specifically, we're going to use Socket.io **namespaces** to segment our events.

- We'll use one namespace called `caps` where all of our clients (vendors and drivers) will connect
- By default, all vendors and drivers hear all of the messages...
  - Ensure that each vendor only processes pickup and delivered events for it's own packages!
    - Options
      - As a vendor, send your vendor id with every pickup, and then when the broadcasted messages come back, ignore those that are not yours
      - Setup a separate namespace for each vendor
      - Each store will have it's own "room" within the 'caps' namespace

The expected output of the 3 running applications is the same as it was in Phase 2

![Output](lab-17-output.png)

> Note: this is the heart of refactoring. The end result **appears** to be the same even after you've made a holistic change on the underlying code to be cleaner and faster. As developers, we want to do great work without changing the users' experience.

### CAPS Application Server Modifications

- Start a socket.io server on a designated port
- Create and accept connections on a namespace called `caps`
- Within the namespace:
  - Monitor the correct general events
    - `pickup`, `in-transit`, `delivered`
    - Broadcast the events and payload back out to the appropriate clients in the `caps` namespace
      - `pickup` can go out to all sockets (broadcast it) so that the drivers can hear it
      - `in-transit` and `delivered` are meant to be heard only by the right vendor

### Vendor Application

- Create a "store id" for the vendor, perhaps with a .env file
- Connects to the CAPS server as a socket.io client to the `caps` namespace
- Every .5 seconds, simulate a new customer order
  - Create a payload object with your store id, order id, customer name, address
  - Emit that message to the CAPS server with an event called `pickup`
- Listen for the `delivered` event coming in from the CAPS server
  - Log "thank you for delivering `payload.id`" to the console

### Driver Application

- Connects to the CAPS server as a socket.io client to the `caps` namespace
- Listen for the `pickup` event coming in from the CAPS server
  - **Simulate picking up the package**
    - Wait 1.5 seconds
    - Log "picking up `payload.id`" to the console
    - emit an `in-transit` event to the CAPS server with the payload
  - **Simulate delivering the package**
    - Wait 3 seconds
    - emit a `delivered` event to the CAPS server with the payload

When running, the vendor and driver consoles should show their own logs. Additionally, the CAPS server should be logging everything.  Your console output should look something like this:

![Output](lab-17-output.png)

### Notes

- You will need to start your servers up in the right order so that you can visually test things out.

1. `CAPS` - needs to be up so that it can accept and re-emit events
1. `vendor` - needs to have a running server to connect to, so that it can hear events
1. `driver` - also needs the server to be running and for vendors to be placing orders

### Visual Validation

We have deployed a web application that's designed to test your Server. This is a good way to ensure that your system works as expected. There's nothing to "turn in" here, this is provided for your benefit.

Open this [Web Application](https://javascript-401.netlify.app/)

It will connect to the socket.io server URL you specify (localhost or Heroku) and will subscribe to the vendor named `1-206-flowers`.

If your sever, vendor and driver apps are all running according to the lab instructions and your vendor has the store name **1-206-flowers**, this application will show the full supply chain as a real-time dashboard. Imagine yourself at the command center, watching status updates...

### Stretch Goal

Instead of simply having the Vendor application send messages every 5 seconds (in fact, turn that vendor application OFF!), write a separate app using express, with a single route: POST `/pickup` that accepts an object that looks like the object you are currently creating in the vendor application.

```javascript
{
  "store": "1-206-flowers",
  "orderID": "65c17431-d1f5-432c-890f-d81788e38c1c",
  "customer": "Juston Reichel",
  "address": "Lake Al, OK"
 }
```

When that route is hit, have the express server fire the event to the socket server with the `pickup` event with that object payload. This should kick off the same series of events that the `setInterval()` was doing in the vendor application, but using a web browser instead of automation to do each one

Assuming your small api server runs on port 3001, the form in the test app will hit that route if you have done this step

### Testing

- Write tests around all of your units
- Test event handler function (not event triggers themselves)
- Use spies to help testing your logger methods (assert that console.log was called right)

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
