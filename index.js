const express = require('express');
const app = express();
const port = 3000;

app.get('/about', (req, res) => {
    res.send('About Us');
}); 

//Serve static files in the "public" folder
app.use(express.static('public'));

//Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json());  //Middleware to parse JSON bodies

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

//middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


//Adding a new route to display a list of items
const items = ['Apple', 'Banana', 'Orange'];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});