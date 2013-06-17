var cmsblock = require('./lib/nunjucks-tags/cmsblock'),
  cmstag = require('./lib/nunjucks-tags/cmstag');

var express = require('express'),
  nunjucks = require('nunjucks');

module.exports = {
  initialise: function(app) {
    var nunjucksEnvironment = app.get('nunjucksEnvironment');
    nunjucksEnvironment.addExtension('CMSBlock', cmsblock);
    nunjucksEnvironment.addExtension('CMSTag', cmstag);

    app.use('/cms', express.static(__dirname + '/public'));
  }
};