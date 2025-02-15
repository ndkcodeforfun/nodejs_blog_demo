const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// Routes init
route(app);

app.use(express.urlencoded());
app.use(express.json());

// HTTP logger
app.use
(morgan('combined'));

//Template engine
          app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views',      path.join(__dirname, 'resources', 'views')); // Use commas for cross-platform compatibility

          app.listen(port, () => {
              console.log(`Example app listening on port ${port}`);
          });
