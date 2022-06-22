//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
//app.use(express.static('./dist/ovent'));
app.use(express.static(__dirname + '/dist/Ovent'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/ovent/'}),
// );
app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname + 'dist/Ovent/index.html')),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);