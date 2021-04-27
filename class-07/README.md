# Bearer Authorization

Using a "Bearer Token" to re-authenticate with a server following a successful login, or obtaining/generating a permanent key

## Learning Objectives

### Students will be able to

#### Describe and Define

- Bearer Authentication
- JSON Web Tokens (jwt)
- Web Security
- When to use Basic or Bearer Authentication

#### Execute

- Create a Bearer Token Auth System
- Secure tokens

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Bearer Tokens

- Bearer Tokens are sent to the user/client after the initial `signin` process has completed.
- Clients must make every subsequent request to the server with that token, in the header
  - `Authorization: Bearer encoded.jsonwebtoken.here`
- The server opens the token, does the re-authentication, and then grants or denies access
- In express servers, this can be done in middleware, in conjunction with a user model

  ```javascript
  app.get('/somethingsecret', bearerToken, (req,res) => {
    res.status(200).send('secret sauce');
  });

  function bearerToken( req, res, next ) {
    let token = req.headers.authorization.split(' ').pop();
    try {
      if ( tokenIsValid(token) ) { next(); }
    }
    catch(e) { next("Invalid Token") }
  }

  function tokenIsValid(token) {
    let parsedToken = jwt.verify(token, SECRETKEY);
    return Users.find(parsedToken.id);
  }
  ```

### Mongoose Virtual Fields

Mongoose allows to add "Virtual" fields to our data model. A virtual field is a property of your data model that:

1. Is defined by you, using a function
1. Added to your data model every time a record is fetched from the database (automatically)
1. Exists only in memory as you access your record
1. Therefore ... virtual fields are never saved to the database

For example, here's a simple data model that describes a piece of food:

```javascript
const food = mongoose.Schema({
  name: {type:"String", required:true},
  calories: {type:"Number", required:true}
  type: {type: "String", enum:["vegetable", "carb", "protien"]}
})
```

Assume you have an instance, such as a piece of bread:

```json
{
  name: "Wonder Bread",
  calories: 100,
  type: "carb"
}
```

In practice, you might want to calculate some value on each food item, based on it's properties. This is a value that has merit in the real world, but isn't something you need to store in the database. In fact, the user entering the data wouldn't actually know how to calculate this anyway.

For our example, let's add a new virtual field called "points" which is an arbitrary figure that'll tell you how healthy something is.

Add this to your mongoose food schema

```javascript
food.virtual('points').get( function() {
  let points = this.calories;
  if ( type === "carb" ) { points = this.calories * 10; }
  else if ( type === "protien" ) { points = this.calories * .5; }
  else if ( type === "vegetable" ) { points = this.calories * .2; }
  return points;
});
```

Now, anytime you get a record from mongoose, using `.find()`, `findOne()`, `findOneById()`, etc, the data that you can see on your record would be this:

```json
{
  name: "Wonder Bread",
  calories: 100,
  type: "carb"
  points: 1000
}
```

If you were to save that record, points would not be stored, it's a calculated value, but you can use this feature of mongoose to create data fields on the fly that can help you to keep information accessible to your code, while not having to persist it.
