// Import our dependencies
require('dotenv').config(); // bring in our .env vars
const express = require('express'); // web framework for node
const morgan = require('morgan'); // logger for node
const methodOverride = require('method-override'); // allows us to use PUT and DELETE methods
const clientsRouter = require("./controllers/clients.js")

// express application
const app = express();

// middleware
app.use(morgan('dev')); // logging
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); // serve static files from public folder
app.use(express.urlencoded({extended: false}));
app.use("/client", clientsRouter)

// Routes

app.get('/', (req, res) => {
    res.redirect('/client');
    })

// Listen
const PORT = process.env.PORT || 3020;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })