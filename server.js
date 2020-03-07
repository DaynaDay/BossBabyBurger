const express = require('express');
const expressHandlebars = require('express-handlebars');


const app = express();

const PORT = process.env.PORT || 3001;


const connection = require('./config/connection');


const routeOne = require('./routes/api/burgers_routes');
const routeTwo = require('./routes/html/html_routes');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(routeOne, routeTwo);

// connect to db
connection.connect(err => {
  if (err) {
    throw new Error(err);
  }

  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
