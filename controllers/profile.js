const Robot = require('../models/data');

const ProfileController = {
  profile: function(req, res){
    let botName = req.params.name;                 //allows you to target a specific user by their name
    // let targetBot;
    Robot.findOne({name: botName}).then(function(robot){
      // if(name == botName){
      //   targetBot = robot;
      // }
      res.render('profile', robot);      //if name clicked renders profile with user info
    });
  }
};

module.exports = ProfileController;
