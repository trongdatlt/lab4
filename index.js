const express = require('express');
const exphbs = require('express-hbs');

const app = express();

// Register the express-hbs view engine
app.engine('hbs', exphbs.express4({
  // Specify the default layout if needed
  defaultLayout: __dirname + '/views/layouts/main.hbs',
}));

app.set('view engine', 'hbs');

// Set the views directory
app.set('views', __dirname + '/views');

// Other routes and configurations can follow...

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
app.get('/bai2', (req, res) => {
    res.render('index');
});
app.get('/bai1', (req, res) => {
    res.send('welcome');
});
app.get('/bai3', function (req, res) {
  res.render('bai3', {
    layout: 'bai3',


  });
});                                                        