/* (1). Application-Level Middleware :- Application-level middleware is bound to an 
instance of the Express application using app.use() or app.METHOD(), where METHOD is 
an HTTP method such as GET, POST, PUT, DELETE, etc.

Ex:- 
const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000);

(2). Router-Level Middleware :- These are bound to an instance of express.Router().

Ex:-
const express = require('express');
const app = express();
const router = express.Router();
router.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

router.get('/', (req, res) => {
  res.send('Hello from Router!');
});
app.use('/router', router);
app.listen(3000);

(3). Error-Handling Middleware :- These functions have four arguments: (err, req, res, next).
Ex:-
const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000);

(4). Built-In Middleware :- Express has some built-in middleware functions such as express.
static, express.json, and express.urlencoded.

Ex:- 
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.listen(3000);

(5). Third-Party Middleware :- These are middleware functions created by the community and
available via npm.

Ex:- 
const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000);

(6). Request-Level Middleware :- Middleware that is specific to a particular route and can 
be applied directly in the route definition.

Ex:- 
const express = require('express');
const app = express();
const logRequest = (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
};
app.get('/', logRequest, (req, res) => {
  res.send('Hello World!');
});
app.listen(3000);

(7). Custom Middleware :- Middleware created for specific needs of the application that 
doesn't fit into the other categories.

Ex:-
const express = require('express');
const app = express();
const myMiddleware = (req, res, next) => {
  console.log('Custom Middleware');
  next();
};
app.use(myMiddleware);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000);

(8). Session Middleware :- Session middleware is used to manage user sessions in your 
application. An example is the express-session middleware.

Ex:- 
const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true
}));
app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome to the session demo. Refresh page!');
  }
});
app.listen(3000);

(9). Authentication Middleware :- Authentication middleware is used to protect routes by 
ensuring that the user is authenticated before accessing certain routes.

Ex:- 
const express = require('express');
const app = express();
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send('This is the dashboard');
});
app.listen(3000);

(10). Parsing Middleware :- Parsing middleware processes the request body and makes it 
available in the req.body property. Examples include body-parser and multer for 
parsing form data.

Ex:-
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.post('/submit', (req, res) => {
  res.send(req.body);
});
app.listen(3000);


*/
