const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/FootballGroundBookingManagement'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/FootballGroundBookingManagement/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);