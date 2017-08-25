const Robot = require('../models/data');

const HomeController = {
  index: function(req, res){
    Robot.find().then(function(robots){
      res.render('index', {robots: robots});
    });
  }
};

module.exports = HomeController;
