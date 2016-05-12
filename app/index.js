'use strict';
var generators = require('yeoman-generator');
module.exports = generators.Base.extend({
  app: function(){
    this.copy('index.html', 'index.html');
    this.copy('styles/main.css', 'styles/main.css');
    this.copy('scripts/main.js', 'scripts/main.js');
  }
});
