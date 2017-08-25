const express = require('express');
const exphbs = require('express-handlebars');
const data = require('./models/data');
const routes = require('./router');
const mongoose = require('mongoose');

const app = express();

const database = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
mongoose.connect(database);


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/static', express.static('public'));



routes(app);

// app.get('/', (req, res) => {
//   res.render('index', {bots: data});              //displays the user's info on index page
// });

// just commented out 2:23
// app.get('/user/:name', (req, res) =>{
//   let userName = req.params.name;                 //allows you to target a specific user by their name
//   let targetUser;
//   data.users.forEach((user) =>{
//     if(user.name == userName){
//       targetUser = user;
//     }
//   });
//   res.render('profile', {user: targetUser});      //if name clicked renders profile with user info
// });
//
// app.get('/request', (req, res) =>{                //renders request success page if connect button clicked
//   res.render('request');
// });



app.listen(process.env.PORT || 3000, () => {
  console.log("Application is running on port 3000");
});

module.exports = app;
